import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import Weather from './components/Weather'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const success = (pos) =>{
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY ="4c4a318058bdd624fbd4f03a71163496"
    
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    axios.get(url)
      .then(({data}) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  },[])
  return (
    <main className="bg-black min-h-screen text-white font-lato flex justify-center items-center px-4">
      <h2>
        Weather
      </h2>
      <Weather weatherInfo={weatherInfo} />
    </main>
  )
}

export default App
