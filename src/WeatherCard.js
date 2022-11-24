import Card from 'react-bootstrap/Card';
import React from 'react'
import Image from 'react-bootstrap/Image'
import "./WeatherCard.css"


export default function WeatherCard(props) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date(props.date);
    let day = weekday[date.getDay()];
    let time = date.toLocaleTimeString('en-US')
    return (
        <Card className='mainCard '>
            <Card.Body className='d-flex flex-column justify-content-between'>
                {props.head == 'true'? <Card.Title>{day} - {props.weather.main}</Card.Title>: <Card.Title>{day}</Card.Title>}
                {/* <Card.Title>{day} - {props.weather.main}</Card.Title> */}
                {props.head == 'true'? <Card.Text>{time}</Card.Text>: <Card.Title></Card.Title>}
                
                <img src={`https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}></img>
                <Card.Title>{Math.round(props.main.temp - 273.15)}°C</Card.Title>
            </Card.Body>
        </Card>
    )
}
