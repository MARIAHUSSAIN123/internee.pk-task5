const cityInput = document.getElementById('city');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const weatherCondition = document.getElementById('weather-condition');
const weatherIcon = document.getElementById('weather-icon');
const errorMessage = document.getElementById('error-message');

searchBtn.addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = cityInput.value;
    const apiKey = '3ab13b4c4cb22c40f550c010bcb327aa';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                errorMessage.textContent = 'City not found!';
            } else {
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                weatherCondition.textContent = `Weather Condition: ${data.weather[0].description}`;
                weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                errorMessage.textContent = '';
            }
        })
        .catch(error => {
            errorMessage.textContent = 'Error fetching weather data!';
        });
}

