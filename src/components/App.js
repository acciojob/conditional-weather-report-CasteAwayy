
import { useEffect, useState, React} from "react";
import WeatherDisplay from "./WeatherDisplay.js";
import './../styles/App.css';

export default function App() {
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
