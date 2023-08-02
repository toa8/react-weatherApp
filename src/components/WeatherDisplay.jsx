/* eslint-disable react/prop-types */

const WeatherDisplay = ({ weatherData, loading, error }) => {
  let weatherEmoji;

  if (weatherData?.description.includes("rain")) {
    weatherEmoji = "🌧";
  }
  if (weatherData?.description.includes("Sunny")) {
    weatherEmoji = "☀";
  }
  if (weatherData?.description.includes("cloudy")) {
    weatherEmoji = "☁";
  }

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 32,
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: 32,
        }}
      >
        <p>Error: invalid search...</p>
        <p>{`Error: ${error.message}...`}</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-content">
        <div>
          <p>🌡 Temperature: {weatherData?.temperature}</p>
          <p>🍃 Wind: {weatherData?.wind}</p>
          <p>
            📝 Description: {weatherData?.description} {weatherEmoji}
          </p>
        </div>
      </div>
      <div className="card-otherdays">
        {weatherData?.forecast.map((item, idx) => {
          return (
            <div key={idx} className="otherdays-box">
              <p>Temp: {item.temperature}</p>
              <p>Wind: {item.wind}</p>
              <p>Day: {item.day}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherDisplay;
