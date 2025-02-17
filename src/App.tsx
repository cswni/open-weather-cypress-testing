import './App.css'
import Page from './layouts/page'
import Header from './layouts/Header'
import WeatherPanel from './layouts/WeatherPanel'
import { useEffect, useState } from 'react'
import Login from './layouts/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const googleLogged = localStorage.getItem("googleLogged");
  
  useEffect(() => {
    if (googleLogged) {
      setIsLoggedIn(true);
    }
  }, [googleLogged]);

  useEffect(() => {
    if (isLoggedIn) {
      // Get location using geolocation API
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);

        //Using https://api.openweathermap.org/data/2.5/weather? get the city name passing the latitude and longitude
        fetch(`${import.meta.env.VITE_WEATHER_API_URL}appid=${import.meta.env.VITE_WEATHER_API_KEY}&lang=es`)
          .then(response => response.json())
          .then(data => {
            console.log(data.name);

            // Obtain the forecast for the city
            fetch(`${import.meta.env.VITE_FORECAST_API_URL}appid=${import.meta.env.VITE_WEATHER_API_KEY}&lang=es`)
              .then(response => response.json())
              .then(data => {
                console.log(data);
              })
          })
      });
    }
  }, [isLoggedIn]);

  return (
    <Page>
      {isLoggedIn ? (
        <>
          <Header />
          <WeatherPanel />
        </>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </Page>
  )
}

export default App