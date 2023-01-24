import React from "react"
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return(
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <div><ul>
          <li>Temperature: {Math.round(props.data.temperature)}°C</li>
          <li className="text-capitalize">Description: {props.data.description}</li>
          <li>Humidity: {props.humidity}%</li>
          <li>Wind speed: {props.data.wind}km/h</li>
          <li><WeatherIcon code={props.data.icon}/>
          </li>
        </ul></div></div>
    )
}