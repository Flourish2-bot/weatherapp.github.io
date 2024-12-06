const API_KEY = 'd8f61eaf9a106eff00136361655ff0da'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch weather data. Please check the city name.');
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`;
    weatherResult.innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <img src="${iconUrl}" alt="${data.weather.description}" />
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather.description}</p>
    `;
}