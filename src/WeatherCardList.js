import React from 'react'
import WeatherCard from './WeatherCard'
import './WeatherCardList.css'

const example = {
    weather:{
        description: "overcast clouds",
        icon: "04n",
        id: 804,
        main: "Clouds"
    },
    dt: Date.now(),
    main:{
        feels_like: 278.97,
        humidity: 81,
        pressure:1018,
        temp:278.97,
        temp_max: 280.64,
        temp_min: 275.64
    }
}

export default function WeatherCardList() {
  return (
    <div className='d-flex p-0 justify-content-between'>
        <WeatherCard weather={example.weather} date={example.dt} main={example.main}></WeatherCard>
        <WeatherCard weather={example.weather} date={example.dt} main={example.main}></WeatherCard>
        <WeatherCard weather={example.weather} date={example.dt} main={example.main}></WeatherCard>
        <WeatherCard weather={example.weather} date={example.dt} main={example.main}></WeatherCard>
        <WeatherCard weather={example.weather} date={example.dt} main={example.main}></WeatherCard>
        <WeatherCard weather={example.weather} date={example.dt} main={example.main}></WeatherCard>
        
    </div>
    
  )
}
