import React, { useState } from "react"
import WeatherInfo from "../WeatherInfo"
import WeatherForecast from "../WeatherForecast"
import axios from "axios"
import "./style.css"

function Weather(props) {
  // const [ready,setReady] = useState(false)
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
    })
    // setReady(true);
  }

  function search(response) {
    let apiKey = "1a67790b1c6fa4780ab9cccbea9d66b6"
    // let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
    // search for a city
    search()
  }

  function handleCityChange(event) {
    setCity(event.target.value)
    // alert(city);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control w-100"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData}/>
      </div>
    )
  } else {
    search()
    return "Loading..."
  }
}

export default Weather
