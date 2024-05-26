import React, { useState, useEffect } from "react"
import axios from "axios"
import "./style.css"
import ForecastDay from "../ForecastDay"

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false)
  const [forecast, setForecast] = useState(null)

  useEffect(() => {
    setLoaded(false)
  }, [props.coordinates])

  function handleResponse(response) {
    console.log(response.data)
    setForecast(response.data.daily)
    setLoaded(true)
  }
  // console.log(props)

  // conditional rendering
  if (loaded) {
    // console.log(forecast)
    return (
      <div className="forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5)
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
           
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "53f3bc1f5d348c44be3e3754c7185573"
    let latitude = props.coordinates.lat
    let longitude = props.coordinates.lon
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)

    return null
  }
}
