import React from 'react';
import Spinner from './Spinner';
import Image from "next/image"
import { AspectRatio } from "../components/ui/aspect-ratio"


const Card = ({ loadingData, showData, weather, forecast }) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = day + '/' + month + '/' + year;
  let url = '';
  let iconUrl = '';
  let iconUrl3 = '';
  let iconUrl6 = '';
  let iconUrl9 = '';
  let forecastDate3 = '';
  let forecastDate6 = '';
  let forecastDate9 = '';

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = 'http://openweathermap.org/img/w/';
    iconUrl = url + weather.list[0].weather[0].icon + '.png';
    iconUrl3 = forecast.list[1]?.weather?.[0]?.icon 
  ? url + forecast.list[1].weather[0].icon + '.png' 
  : '';
iconUrl6 = forecast.list[2]?.weather?.[0]?.icon 
  ? url + forecast.list[2].weather[0].icon + '.png' 
  : '';
iconUrl9 = forecast.list[3]?.weather?.[0]?.icon 
  ? url + forecast.list[3].weather[0].icon + '.png' 
  : '';

    const getDateString = (index) => {
      const date = forecast.list[index].dt_txt;
      const day = date.substring(8, 10);
      const month = date.substring(5, 7);
      const year = date.substring(0, 4);
      const time = date.substring(11, 16);
      return day + '/' + month + '/' + year;
    };

    forecastDate3 = getDateString(1);
    forecastDate6 = getDateString(2);
    forecastDate9 = getDateString(3);
  }
  
  return (
    <div className="w-[1200px]">
      {showData === true ? (
        <div
          className="container mx-auto bg-transparent rounded-start "
          style={{ maxWidth: '100%',maxHeight: '490px', overflow: 'hidden' }}
        >
          <div className="row g-0">
            <div
              className="col-md-4"
              style={{ maxHeight: '480px', overflow: 'hidden' }}
            >
              <h3
                className="card-title"
                style={{ color: 'black', fontWeight: 'bold', }}
              >
                {weather.city.name}
              </h3>
              <p
                className="card-date"
                style={{ color: 'black', fontWeight: 'bold' }}
              >
                {date}
              </p>
              <h1 className="card-temp "
              style={{ color: 'black', fontWeight: 'bold', }}
              >
                {(weather.list[0].main.temp - 273.15).toFixed(1)}°C
              </h1>
              <p
                className="card-desc d-flex align-items-center justify-content-center"
                style={{color: 'black', fontWeight: 'bold'}}
              >
                <img src={iconUrl} alt="icon" />
                {weather.list[0].weather[0].description}
              </p>
              <img 
                src="https://images.pexels.com/photos/1292843/pexels-photo-1292843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="weather"
                style={{
                  width: '100%',
                  height: '475px',
                  objectFit: 'cover',
                  borderRadius: '1.5rem',
                }}
              />
            </div>
            
            <div 
              className="col-md-8 mt-0"
              style={{
                background: 'linear-gradient(to right, #3b82f6, #64748b)',
                padding: '3rem',
                borderRadius: '0.5rem',
                marginTop: '2.5rem',
                boxShadow: '0 5px 6px rgba(0, 0, 0, 0.1)',
                color: 'black',
                
                
              }}
            >
               
              <div className="card-body text-start">
                <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                  Temperatura Máxima:{' '}
                  {(weather.list[0].main.temp_max - 273.15).toFixed(1)}°C
                </h5>
                <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                  Temperatura Mínima:{' '}
                  {(weather.list[0].main.temp_min - 273.15).toFixed(1)}°C
                </h5>
                <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                  Sensación Térmica:{' '}
                  {(weather.list[0].main.feels_like - 273.15).toFixed(1)}°C
                </h5>
                <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                  Humedad: {weather.list[0].main.humidity}%
                </h5>
                <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                  Velocidad del Viento: {weather.list[0].wind.speed}m/s
                </h5>
              </div>
              <hr />
              <div
                className="row mt-10 card-body text-start"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                {[forecastDate3, forecastDate6, forecastDate9].map((date, index) => (
                  <div
                    key={index}
                    style={{
                      flex: '1',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      marginRight: index < 2 ? '1rem' : '0',
                    }}
                  >
                    <p>{date}</p>
                    <p className="d-flex align-items-center">
                      <img
                        src={[iconUrl3, iconUrl6, iconUrl9][index]}
                        alt="icon"
                        style={{ marginRight: '0.5rem' }}
                      />
                      {forecast.list[index + 1].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[index + 1].main.temp - 273.15).toFixed(1)}°C
                    </p>
                  </div>
                ))}
              </div>
          </div>
          </div>
        </div>
      ) : (
        <h2 className="text-light">Sin Datos</h2>
      )}
    </div>
  );
};

export default Card;