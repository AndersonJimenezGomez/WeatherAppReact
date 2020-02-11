const LOCATION = "Bogotá,Co";
const API_KEY = "6b0d4742e5a29e5a2daecd6001980885";
const URL_BASE_WEATHER = "http://api.openweathermap.org/data/2.5/weather";
const API_WEATHER = `${URL_BASE_WEATHER}?q=${LOCATION}&APPID=${API_KEY}`;

export default API_WEATHER;