import React from "react";

// Components
import WeatherDisplay from "./components/WeatherDisplay";
import Page404 from "./components/Page404";

const App = () => {
  const inputRef = React.useRef(null);
  const [weatherData, setWeatherData] = React.useState();
  const [error, setError] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const fetchWeatherInfo = async (e) => {
    e.preventDefault();

    try {
      const userInput = inputRef.current.value;
      const response = await fetch(
        `https://goweather.herokuapp.com/weather/${userInput}`
      );
      const data = await response.json();
      if (response.status === 404) {
        setError(true);
        setShow(false);
      } else {
        setWeatherData(data);
        setError(false);
        setShow(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  let displayResult =
    error === true ? (
      <Page404 />
    ) : (
      <WeatherDisplay weatherData={weatherData} show={show} />
    );

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
        <div className="result">{displayResult}</div>
      </div>
    </section>
  );
};

export default App;
