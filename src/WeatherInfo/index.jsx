import React from "react"
import FormattedDate from "../FormattedDate"

function WeatherInfo(props) {
  return (
    <div className="weatherinfo">
      <h3>{props.data.city}</h3>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>

        <li className="text-capitalize"> {props.data.description} </li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {props.data.wind}km/h </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
