import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

   useEffect(() => {
     setLoaded(false);
   }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  
  function load() {
    let apiKey = "217e1884eaeda1d000c71ab70e625169";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    
    return (
      <div className="WeatherForecast">
        <div className="container">
          <div className="row">
            {forecast.map((dailyForecast, index) =>
             
                (
                  <div className="col days" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>)
                
              
            )}
          </div>
        </div>
      </div>
    );
  } else {
   load();

    return null;
  }
}
