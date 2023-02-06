import React, { useState } from 'react';
import axios from "axios";
import './WeatherForecast.css'
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        console.log(response);
        setForecast(response.data);
        setLoaded(true);
         }
   
if (loaded) {
    return (
        <div className="WeatherForecast">
        <div className="row">
        <div className="col"> <WeatherForecastDay data={forecast.daily[1]}/></div>
        <div className="col"> <WeatherForecastDay data={forecast.daily[2]}/></div>
        <div className="col"> <WeatherForecastDay data={forecast.daily[3]}/></div>
        <div className="col"> <WeatherForecastDay data={forecast.daily[4]}/></div>
        <div className="col"> <WeatherForecastDay data={forecast.daily[5]}/>
            </div>    
            </div>
            </div>
    )
 
}
else {
    let apiKey = `9eca7aac0b071aa16e3cb063adba0785`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }
    
}