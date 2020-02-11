
import convert from 'convert-units';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, }
    from './../constants/weathers';

const getWeatherState = weatherApiData => {
    return SUN;
}

const transformWeather = weatherApiData => {
    const { humidity, temp } = weatherApiData.main;
    const { speed } = weatherApiData.wind;
    const weatherState = SUN;
    const temperature = getTemp(temp);
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

export default transformWeather;
