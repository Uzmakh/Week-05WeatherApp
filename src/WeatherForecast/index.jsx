import './style.css'

export default function WeatherForecast(props){
    return(
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