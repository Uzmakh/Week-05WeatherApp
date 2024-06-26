import Weather from './Weather/index';
import './App.css'

function App() {
 

  return (
    <>
    <div className="container">
    <h1>Weather App</h1>
    <Weather defaultCity="New York"/>
    <footer>
    <p>
      open-source code on <a href="https://github.com/Uzmakh/sheCodesReact-Weather-App">GitHub</a> by Uzma Khan and hosted on <a href=" https://react-weather-app-youzees.netlify.app/" >Netlify</a>
    </p>
    </footer>
 
    </div>
    </>
  )
}

export default App
