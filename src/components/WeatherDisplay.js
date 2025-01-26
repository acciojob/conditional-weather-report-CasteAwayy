import React from 'react';

export default function WeatherDisplay({ weatherData }) {
  const { temperature, conditions } = weatherData;
  return (
    <div>
      <p>
        Temperature:
        <span style={temperature > 20 ? { color: "red" } : { color: "blue" }}>
          {temperature}
        </span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}
