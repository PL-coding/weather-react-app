import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from './WeatherForecast';
import WeatherInfo from "./WeatherInfo";
import './Weather.css';

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ready: false});

  function handleSubmit(event) {
    event.preventDefault();
    updateCity();
  }

  function updateCity() {
    
    let apiKey = `9eca7aac0b071aa16e3cb063adba0785`;
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(getWeather);
  }

  function getWeather(response) {
               setWeather({
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
          });
  }

  function handleChange(event) {
    setCity(event.target.value);
  }
  
  if (weather.ready) {
    return (
      <div className="Weather container">
      <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={handleChange}
      />
      <input type="submit" value="🔍" />
      </form>
          <div><WeatherInfo data={weather}/></div>
          <WeatherForecast coordinates={weather.coordinates}/>
          
    </div>
    );
  } else { updateCity();
    return "Loading..."
  }
}
