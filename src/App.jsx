import React from "react";

// Components
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  const inputRef = React.useRef(null);
  const [weatherData, setWeatherData] = React.useState();

  const fetchWeatherInfo = async (e) => {
    e.preventDefault();
    const userInput = inputRef.current.value;

    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${userInput}`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <section className="app">
      <div className="card">
        <p className="title">How is weather right now?</p>
        <form className="form">
          <input
            type="text"
            placeholder="Enter a Country/City name"
            maxLength={40}
            ref={inputRef}
          />
          <button onClick={fetchWeatherInfo}>Search</button>
        </form>
        <span className="line"></span>
        <div className="result">
          <WeatherDisplay weatherData={weatherData} />
        </div>
      </div>
    </section>
  );
};

export default App;
