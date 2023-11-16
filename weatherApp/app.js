/ Replace 'YOUR_API_KEY' with the API key you obtained from OpenWeatherMap
const apiKey = 'YOUR_API_KEY';

function getWeather() {
  const cityInput = document.getElementById('cityInput').value;

  // Check if the user entered a city
  if (!cityInput) {
    alert('Please enter a city.');
    return;
  }

  // Make a request to the OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');

  // Display relevant weather information
  weatherInfo.innerHTML = `
    <p>City: ${data.name}</p>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
}