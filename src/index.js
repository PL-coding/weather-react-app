import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './Weather';
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather />
    <footer>Coded by Louise Gray and open-sourced on <a href='https://github.com/PL-coding/weather-react-app' target="_blank" rel="noreferrer"> GitHub</a></footer>
  </React.StrictMode>
);

