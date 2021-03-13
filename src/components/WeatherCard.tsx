import React from 'react'
import { Weather } from '../store/types'

const WeatherCard: React.FC<Weather> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <span>{props.main.temp} &deg;C</span>
    </div>
  )
}

export default WeatherCard
