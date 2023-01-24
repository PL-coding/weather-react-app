import React, { useState } from "react";

export default function WeatherTemperature(props) {
    let [unit, setUnit] = useState("metric");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("imperial");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("metric");
    }
    if (unit === "metric") {
    return (
    <div className="WeatherTemperature">
        {Math.round(props.celsius)}<span className="unit">°C | <a href="/" onClick={showFahrenheit}>°F</a></span>
        </div>);}
else {
    return (
        <div className="WeatherTemperature">
            {Math.round((props.celsius*1.8) + 32)}<span className="unit"><a href="/" onClick={showCelsius}>°C</a> | °F</span>
            </div>);
}
}