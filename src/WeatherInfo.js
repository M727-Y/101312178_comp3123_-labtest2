import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container'

export default function WeatherInfo(props) {
    const city = props.city
  return (
    <Alert variant="dark" className='info m-0'>
        <Container className='w-100'>

            <div className='row currentInfo d-flex flex-row justify-content-between'>
                <p className='w-50'>Feels like: </p>
                <p className='w-50 data'>{Math.round(props.main.feels_like- 273.15)}°C</p>
            </div>
            <div className='row currentInfo d-flex flex-row justify-content-between'>
                <p className='w-50'>Temp max: </p>
                <p className='w-50 data'>{Math.round(props.main.temp_max- 273.15)}°C</p>
            </div>
            <div className='row currentInfo d-flex flex-row justify-content-between'>
                <p className='w-50'>Temp min: </p>
                <p className='w-50 data'>{Math.round(props.main.temp_min- 273.15)}°C</p>
            </div>
            <div className='row currentInfo d-flex flex-row justify-content-between'>
                <p className='w-50'>Humidity: </p>
                <p className='w-50 data'>{props.main.humidity}%</p>
            </div>
            <div className='row currentInfo d-flex flex-row justify-content-between'>
                <p className='w-50'>Pressure: </p>
                <p className='w-50 data'>{props.main.pressure}Pa</p>
            </div>
            <div className='row currentInfo d-flex flex-row justify-content-between'>
                <p className='w-50'>Wind: </p>
                <p className='w-50 data'>{props.wind.speed}m/s</p>
            </div>
            <div className='row currentInfo d-flex flex-row justify-content-between'>
                <p className='w-50'>Location: </p>
                <p className='w-50 data' >{city}</p>
            </div>
        </Container>
    </Alert>
  )
}
