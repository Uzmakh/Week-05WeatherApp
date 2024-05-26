export default function ForecastDay(props) {
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`
    }
    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }
  return (
    <>
      <div className="forecast-day">{day()}</div>

      <img
        src={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
      />

      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </>
  )
}
