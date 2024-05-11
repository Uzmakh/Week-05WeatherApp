import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import FormattedDate from "../FormattedDate";

function Weather(props) {
  // const [ready,setReady] = useState(false)
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: response.data.dt*1000,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
      temperature: response.data.main.temp
     })
    // setReady(true);
  }

  if(weatherData.ready){
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control w-100"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h3>{ weatherData.city }</h3>
        <ul>
        <FormattedDate date={weatherData.date}/>
          <li className="text-capitalize"> {weatherData.description} </li>
        </ul>
        <div className="row mt-2">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
            />
  
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {weatherData.wind}km/h </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }else{

    let apiKey = "1a67790b1c6fa4780ab9cccbea9d66b6";
    // let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
 
}

export default Weather;
