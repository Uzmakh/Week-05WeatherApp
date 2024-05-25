import axios from "axios";
import "./style.css"

export default function WeatherForecast(props) {

function handleResponse(response){
  console.log(response.data);
}
console.log(props);

  let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
  let latitude =  props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

  axios.get(apiUrl).then(handleResponse)

// https://api.openweathermap.org/data/2.5/onecall?lat=74&lon=40.7&exclude=daily&appid=53f3bc1f5d348c44be3e3754c7185573

  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Sun</div>

          <img src={props.data.iconUrl} alt={props.data.description} />

          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">12°</span>
            <span className="forecast-temperature-min">8°</span>
          </div>
        </div>
      </div>
    </div>
  )
}
