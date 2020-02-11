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


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "El santuario",
            data: data,
        };
    }

    handleOnUpdateClick = () => {
        console.log("Actualizado pai!");
        this.setState({city:"El Santuario", data:data2})
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