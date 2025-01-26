
import { useEffect, useState } from "react";
import React from 'react';
import WeatherDisplay from "./WeatherDisplay.js";
import './../styles/App.css';

const App = ()=> {
  const weatherInit = { temperature: 25, conditions: "Sunny" };
  const [weather, setWeather] = useState(weatherInit);
  useEffect(
    (weather) => {
      setWeather((weather) => {
        return {
          ...weather,
          temperature: 25,
        };
      });
    },
    [weather]
  );
  return <WeatherDisplay weatherData={weather} />;
}
export default App;
