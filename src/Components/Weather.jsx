import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  function fetchWeatherData() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    if (position) {
      //weather APIs baseurl and apikeys
      const baseURL = process.env.REACT_APP_WEATHER_BASE_URL;
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      //get user's position
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLoading(true);

      axios
        .get(
          `${baseURL}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        )
        .then((response) => {
          setWeather(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  }
  const temperature = (temp) => Math.round(temp - 273.15);
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Weather Information</h2>
      {loading ? (
        <div className="text-center">
          <div className="text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : weather ? (
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Location: {weather.name}</h5>
                <p className="card-text">
                  Temperature: {temperature(weather.main.temp) + "°C"}
                </p>
                <p className="card-text">
                  Condition: {weather.weather[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-danger">
            Weather data not available, location permission needed
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
