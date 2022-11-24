import React, { Component }  from 'react'
import WeatherCard from './WeatherCard'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import "./Interface.css"
import WeatherInfo from './WeatherInfo'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import WeatherCardList from './WeatherCardList'

const KEY = '07cb238abfbff6d529c1453f57ad200b'

export default class Interface extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            city:'Toronto',
            weather: {},
            main:{},
            wind:{},
            dt:Date
            
        }
    }
    componentDidMount = () =>{
        this.getData()
    }
    // onValueChange = (event) =>{
    //     // console.log(event.target.value)
    //     this.setState({[event.target.name] : event.target.value})
    // }
    onSubmitForm = async (event) =>{
        event.preventDefault()
        await this.setState({ city: this.element.value });
        this.getData()
        //console.log("Form submitted " + JSON.stringify(this.state))
        
    }
    
    getData = async ()=>{
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${KEY}`)
        .then(res => {
            //console.log(res.data)
            this.setState({...this.state,weather:res.data.weather[0],main:res.data.main,wind:res.data.wind,dt:res.data.dt})
            console.log(this.state)
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        return (
            <Container className='content'>
                    <div className='row w-100 flex-fill'>
                        <div className='col-md-4'>
                            <WeatherCard weather={this.state.weather} date={this.state.dt} main={this.state.main} head='true'></WeatherCard>
                        </div>
                        <div className='col-md-8'>
                            <Container className='d-flex flex-column justify-content-between h-100 p-0'>
                            <div className='row' >
                            <Form onSubmit={(e)=>this.onSubmitForm(e)} className="mb-3 p-0 d-flex flex-row justify-content-between">
                                <Form.Control 
                                    name='city'
                                    type='text'
                                    ref={el => this.element = el}
                                    // onChange={this.onValueChange}
                                    placeholder="Search"
                                    className=''/>
                                <Button type='submit' className='button w-10' variant="outline-secondary">Search</Button>
                            </Form>
                            </div>
                            <div className='row'>
                                {/* <WeatherCardList></WeatherCardList>  This part is not working*/}
                            </div>
                            <div className='row'>
                                <WeatherInfo main={this.state.main} wind={this.state.wind} city={this.state.city}/>
                            </div>
                            </Container>
                        </div>
                    </div>
                </Container>
        )
    }
}
