import React from "react";
// Components
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";

import useFetch from "./hooks/useFetch";

const App = () => {
  const inputRef = React.useRef(null);
  const [url, setUrl] = React.useState("");
  const [show, setShow] = React.useState(false);
  let userInput;

  const getWeather = (e) => {
    e.preventDefault();
    userInput = inputRef.current.value;
    setUrl(`https://goweather.herokuapp.com/weather/${userInput}`);
    setShow(true);
  };

  const { data, loading, error } = useFetch(url);

  return (
    <section className="app">
      <form className="form-area">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter city or country..."
          maxLength={30}
        />
        <button type="submit" onClick={getWeather}>
          Search
        </button>
      </form>
      {show && (
        <WeatherDisplay weatherData={data} loading={loading} error={error} />
      )}
      <Footer />
    </section>
  );
};

export default App;
