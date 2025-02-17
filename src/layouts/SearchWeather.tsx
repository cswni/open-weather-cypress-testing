import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const SearchWeather = ({ newLocation, onLogout }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    newLocation(city);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b224c5e421318de0a3b4c2ce90611833`
      )
        .then((response) => response.json())
        .then((data) => {
          const cityName = data.name;
          setCity(cityName);

          if (cityName) {
            setTimeout(() => newLocation(cityName), 3000);
          }
        });
    });
  }, []);

  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-2">
      <Input
        value={city}
        type="text"
        placeholder="Ingresa una ciudad"
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
        Buscar
      </Button>
      
    </form>
  );
};

export default SearchWeather;
