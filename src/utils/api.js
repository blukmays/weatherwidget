import axios from 'axios';

const _baseURL = 'http://api.openweathermap.org/data/2.5/';
const _APIKEY = 'a90a1769668d41f38e80d8ee118e7760';

function prepRouteParams (queryStringData) {
    return Object.keys(queryStringData)
        .map(function (key) {
            return key + '=' + encodeURIComponent(queryStringData[key]);
        }).join('&')
}

function prepUrl (type, queryStringData) {
    return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
    return {
        q: city,
        type: 'accurate',
        APPID: _APIKEY,
        cnt: 5
    }
}

function getCurrentWeather (city) {
    const queryStringData = getQueryStringData(city);
    const url = prepUrl('weather', queryStringData)

    return axios.get(`http://localhost:5000/v1/weather/current`)
        .then(function (currentWeatherData) {
            return currentWeatherData.data
        })
}

function getForecast (city) {
    const queryStringData = getQueryStringData(city);
    const url = prepUrl('forecast/daily', queryStringData)

    return axios.get(`http://localhost:5000/v1/weather/current`)
        .then(function (forecastData) {
            return forecastData.data
        })
}

export default {
    getCurrentWeather: getCurrentWeather,
    getForecast: getForecast
};