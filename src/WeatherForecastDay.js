import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props){
    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`
    }
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`
    }
    function day() {
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
        return days[day];
    }

   return ( <div>
                <div>{day()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={24}/>
                <div>
                <span className="WeatherForecast-min">{minTemperature()}</span>
                <span className="WeatherForecast-max">{maxTemperature()}</span>
                </div>
                </div>
);
}