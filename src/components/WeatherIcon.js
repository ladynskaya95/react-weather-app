import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY-DAY",
    "02n": "PARTLY_CLOUDY-NIGHT",
    "03d": "PARTLY_CLOUDY-DAY",
    "03n": "PARTLY_CLOUDY-NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "05d": "RAIN",
    "05n": "RAIN",
    "06d": "RAIN",
    "06n": "RAIN",
    "07d": "RAIN",
    "07n": "RAIN",
    "08d": "SNOW",
    "08n": "SNOW",
    "09d": "FOG",
    "09n": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#70757A"
      size={78}
      animate={true}
    />
  );
}
