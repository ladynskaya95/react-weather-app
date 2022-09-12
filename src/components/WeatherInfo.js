import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    console.log(props.data)
  return (
    <div className="weather-info">
      <div className="overview">
        <h2 className="heading" id="city">
          {props.data.city}
        </h2>
        <ul>
          <li id="current-condition" className="text-capitalize">
            {props.data.description}
          </li>
        </ul>
        <div className="row">
          <div className="col-3">
            <div className="clearfix weather-icon">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} size={75} />
              </div>
              <div className="float-left">
                <strong id="temperature-degree">
                  {Math.round(props.data.temperature)}
                </strong>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <ul id="mainInfo">
              <li> max {Math.round(props.data.maxTemp)}°C</li>
              <li> min {Math.round(props.data.minTemp)}°C</li>
              <li> feels like {Math.round(props.data.feelsLike)}°C</li>
            </ul>
          </div>
          <div className="col-5">
            <span>
              <ul id="additional-info">
                <li>
                  Humidity: <span id="humidity">{props.data.humidity}</span>%
                </li>
                <li>
                  Wind Speed:{" "}
                  <span id="wind-speed">
                    {Math.round(props.data.windSpeed)}
                  </span>{" "}
                  km/h
                </li>
                <li>
                  Visibility:{" "}
                  <span id="wind-speed">{props.data.visibility / 1000} km</span>{" "}
                </li>
                <li>
                  Pressure:{" "}
                  <span className="textLeft">{props.data.pressure} hPa</span>
                </li>
                <li>
                  Clouds:{" "}
                  <span className="textLeft">{props.data.clouds} %</span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
