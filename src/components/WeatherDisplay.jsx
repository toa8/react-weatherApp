/* eslint-disable react/prop-types */

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="result-card">
      <p>🌡Temperature : {weatherData?.temperature}</p>
      <p>🍃 Wind : {weatherData?.wind}</p>
      <p>📃 Description : {weatherData?.description}</p>
      <div className="outer-forecast">
        {weatherData?.forecast.map((item, idx) => {
          return (
            <div className="forecast" key={idx}>
              <p>Day {item.day}</p>
              <p>{item.temperature}</p>
              <p>{item.wind}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherDisplay;
