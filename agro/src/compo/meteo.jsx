import React, { useEffect, useState } from 'react'
import Tomorrow from './tomorrow'
import Today from './today'

const meteo = () => {

  const [weather, setWeather] = useState('')
  const [weather2, setWeather2] = useState('')


  useEffect(() => {
  }, [])


  return (
    <div>
      <div className='flex justify-center space-x-8 space-y-32'>

        <div className='grid '>
          <Today weather={weather} />
        </div>

        <div>
          <Tomorrow weather={weather2} />
        </div>
      </div>
    </div>
  )
}

export default meteo
