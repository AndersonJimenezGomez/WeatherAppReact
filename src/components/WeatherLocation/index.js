import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import Location from './Location';
import WeatherData from './WeatherData';
import endPoint from '../../constants/EndPoints';
import transformWeather from '../../services/transformWeather';

import './styles.css';









class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "El santuario",
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleOnUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }




    handleOnUpdateClick = () => {
        fetch(endPoint).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        });
    }
    render() {
        console.log("render");
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <div>
                    <Location city={city}></Location>
                    {data ? <WeatherData data={data}></WeatherData> : <CircularProgress/>}
                    <br />
                    <Button variant="contained" color ="primary" onClick={this.handleOnUpdateClick}>Actualizar</Button>
                </div>
            </div>
        );
    }
}
export default WeatherLocation;