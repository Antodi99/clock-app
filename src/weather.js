const GEOLOCATION_API = 'http://ip-api.com/json';
const WEATHER_API = 'http://api.weatherapi.com/v1';
const WEATHER_API_KEY = 'cedd8314286c4d98bdf191918221102';

const location = document.getElementById('location');
const weatherImg = document.getElementById('weather-img');
const region = document.getElementById('region');
const weather = document.getElementById('weather');
const temperatureFeels = document.getElementById('temperature-feels');
const temperature = document.getElementById('temperature');
const change = document.getElementById('change');

async function geoAndWeather() {
  let locationVal = '';
  try {
    const geoResponse = await fetch(GEOLOCATION_API, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { regionName, country } = await geoResponse.json();

    location.innerText = `${regionName}, ${country}`;
    locationVal = `${regionName}, ${country}`;

    const weatherResponse = await fetch(`${WEATHER_API}/current.json?key=${WEATHER_API_KEY}&q=${locationVal}&aqi=no`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { current } = await weatherResponse.json();

    temperature.innerText = `${current.temp_c}°C`;
    weather.innerText = `Weather: ${current.condition.text}`;
    weatherImg.src = current.condition.icon;
    region.innerText = `Region: ${locationVal}`;
    temperatureFeels.innerText = `Feels like: ${current.feelslike_c}°C`;

    change.addEventListener('click', () => {
      if (temperature.innerText === `${current.temp_c}°C`) {
        temperature.innerText = `${current.temp_f}F`;
        temperatureFeels.innerText = `Feels like: ${current.feelslike_f}F`;
        change.innerText = 'Change to °C';
      } else {
        temperature.innerText = `${current.temp_c}°C`;
        temperatureFeels.innerText = `Feels like: ${current.feelslike_c}°C`;
        change.innerText = 'Change to F';
      }
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

geoAndWeather();
