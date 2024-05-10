import React, { useEffect, useState } from 'react'
import Tomorrow from './tomorrow'
import Today from './today'

const meteo = () => {

  const [weather, setWeather] = useState('')

  const generateWeather = () => {
      const weatherOptions = ['Ensoleillé', 'partiellement nuageux', 'pluvieux', 'Orageux'];
      const randomIndex = Math.floor(Math.random() * weatherOptions.length);
      const randomWeather = weatherOptions[randomIndex];
      setWeather(randomWeather);
    };

    useEffect(() => {
      generateWeather();
    }, [])


  return (
    <div className='flex justify-center space-x-8 space-y-32'>

      <div className='grid '>
        <Today weather={weather}/>
      </div>

      <div>
        <Tomorrow weather={weather} />
      </div>
    </div>
  )
}

export default meteo
