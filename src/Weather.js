import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function updateCity(event) {
    event.preventDefault();
    let apiKey = `9eca7aac0b071aa16e3cb063adba0785`;
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(getWeather);
  }

  function getWeather(response) {
    setLoaded(true);
    setWeather({
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
    <form onSubmit={updateCity}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={handleChange}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        <h1>Weather App</h1>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind speed: {weather.wind}km/h</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <h1>Weather App</h1>
        {form}
      </div>
    );
  }
}
