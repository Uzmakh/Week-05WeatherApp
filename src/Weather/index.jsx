import React from 'react'
import './style.css'

function Weather() {
    return (
        <div className='weather'>
            <form>
                <div className="row">
                  
                    <div className="col-9">
                        <input type="search"
                            placeholder="Enter a city..."
                            className="form-control w-100" autoFocus="0"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>

                </div>
            </form>
            <h3>New York</h3>
            <ul>
                <li>Wednesday 07:00 pm</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-2">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy" />

                    <span className="temperature">17</span>
                    <span className="unit">°C</span>
                 
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15% </li>
                        <li>Humidity: 72% </li>
                        <li>Wind: 15 km/h </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Weather