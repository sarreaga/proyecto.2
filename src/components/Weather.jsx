import React, { useState } from 'react'

const Weather = ({weatherInfo}) => {
    const [isCelsius, setisCelsius] = useState(true)

    const kelvinToCelsius=(tempKelvin) =>{
        return (tempKelvin - 273.15).toFixed(1)

    }

    const kelvinToFahrenheit =(tempKelvin) =>{
        return(((tempKelvin-273.15)*9/5)+32).toFixed(1)
    }
    const handleChangeUnitTemp =() =>{
        setisCelsius(!isCelsius)
    }
    const resultTempConversion = isCelsius? kelvinToCelsius(weatherInfo?.main.temp): kelvinToFahrenheit(weatherInfo?.main.temp)

    const imageWeather ={
        "04n": "bg-[url(/images/noche.png)]"
    }
  return (
    <section className="text-center">
        <h2>{weatherInfo?.name}</h2>
        <section  className={`grid gap-4 sm:grid-cols-[auto_auto] ${imageWeather[weatherInfo?.weather[0].icon]}`} >
            <section className='bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center'>
                <h4 className='col-span-2'>{weatherInfo?.weather[0].description}</h4>
                <span className='text-4xl'>{resultTempConversion }°{isCelsius? "C" : "F"}</span>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />   
                </div>
                
            </section>


                
            <section className='bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid.cols-1'>
                <article className='flex gap-2 items-center'>
                    <div className='w-[18px]'>
                        <img src={"/images/wind.png"} alt="" />
                    </div>
                    <span>{weatherInfo?.wind.speed} m/s</span>
                </article>

                <article className='flex gap-2 items-center'>
                    <div className='w-[18px]'>
                        <img src={"/images/humidity.png"} alt="" />
                    </div>
                    <span>{weatherInfo?.main.humidity}%</span>
                </article>

                <article className='flex gap-2 items-center'>
                    <div className='w-[18px]'>
                        <img src={"/images/pressure.png"} alt="" />
                    </div>
                    <span>{weatherInfo?.pressure}hPa</span>
                </article>
            </section>
        </section>
        <button onClick={handleChangeUnitTemp} className='nt-4 bg-white text-black'>F / C</button>
    </section>
  )
}

export default Weather
