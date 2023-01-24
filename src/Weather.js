import React, { useState } from "react";
import axios from "axios";
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
        ready: true,
        city: response.data.name,
        temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={handleChange}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (weather.ready) {
    return (
      <div className="Weather">
        <header>
          <div>
        <h1>{weather.city}</h1></div>
        <div>
        <h2>11:04am Tuesday, 24 January 2023</h2>
        </div></header>
        <main>
        <div><ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind speed: {weather.wind}km/h</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul></div>
        <div>{form}</div></main>
        
        
      </div>
    );
  } else { updateCity();
    return "Loading..."
  }
}
