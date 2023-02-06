import React from "react"
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from './FormattedDate';

export default function WeatherInfo(props) {
    return(
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <div className="Updated">Last updated: <FormattedDate date={props.data.date} /></div>
        <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex"><div>
            <ul>
                <li className="weatherIcon"><WeatherIcon code={props.data.icon} size={48}/></li>
                <li className="WeatherDescription text-capitalize">{props.data.description}</li></ul></div>
        <WeatherTemperature celsius={props.data.temperature}/>
        </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
    )
}