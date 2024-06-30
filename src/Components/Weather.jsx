import React, { useEffect, useState } from "react";
import axios from "axios";

//weather APIs baseurl and apikeys
const baseURL = process.env.REACT_APP_WEATHER_BASE_URL;
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

function Weather() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  function fetchWeatherData() {
    //get user's current position using navigator geolocation
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    if (position) {
      //get user's latitude and longitude
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
  //Convert Farenheit to Celcius
  const temperature = (temp) => Math.round(temp - 273.15);

  return (
    <div>
      {loading ? (
        <span className="text-primary">Loading...</span>
      ) : weather ? (
        <span>
          <span className="text-primary">
            {weather.name} {temperature(weather.main.temp) + "°C"}
          </span>
          <br></br>
          <span className="text-secondary">
            Condition: {weather.weather[0].description}
          </span>
        </span>
      ) : (
        <span className="text-danger">
          Weather data not available, location permission needed
        </span>
      )}
    </div>
  );
}

export default Weather;
