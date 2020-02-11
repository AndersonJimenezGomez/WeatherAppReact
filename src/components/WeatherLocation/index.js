import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, }
    from '../../constants/weathers';

import Button from 'react-bootstrap/Button';

const data = {
    temperature: 15,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s",
}

const data2 = {
    temperature: 5,
    weatherState: SNOW,
    humidity: 15,
    wind: "10 m/s",
}

const LOCATION = "El Santuario,Co";
const API_KEY = "6b0d4742e5a29e5a2daecd6001980885";
const URL_BASE_WEATHER = "http://api.openweathermap.org/data/2.5/weather";
const API_WEATHER = `${URL_BASE_WEATHER}?q=${LOCATION}&APPID=${API_KEY}`;
const EO = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6b0d4742e5a29e5a2daecd6001980885";


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "El santuario",
            data: data,
        };
    }

    handleOnUpdateClick = () => {
        fetch(API_WEATHER);
    }
    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <div>
                    <Location city={city}></Location>
                    <WeatherData data={data}></WeatherData>
                    <br />
                    <Button variant="primary" onClick={this.handleOnUpdateClick}>Actualizar</Button>
                </div>
            </div>
        );
    }
}
export default WeatherLocation;