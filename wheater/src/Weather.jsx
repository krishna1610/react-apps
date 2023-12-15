import React, { useState } from "react";

const Weather = () => {
    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState({});

    const getWeatherInfo = async() => {
        const res = await fetch(`http://api.weatherstack.com/current?access_key=990087c10b6770fcb47c19f0205f0df1&query=${cityName}`);
        const data = await res.json();
        setWeatherData(data);
    };

    return(<div>
        <input 
            type="text" 
            placeholder="Enter City Name" 
            value={cityName} 
            onChange={(e)=>setCityName(e.target.value)}
        >
        </input>
        <button onClick={getWeatherInfo}>Get Info</button>
        <div>
            <div>Current Temperature: {weatherData?.current?.temperature}</div>
            <div>Current Visibility: {weatherData?.current?.visibility}</div>
            <div>Current Wind Speed: {weatherData?.current?.wind_speed}</div>
            <div>Current Humidity:{weatherData?.current?.humidity}</div>
        </div>
    </div>)
};

export default Weather;