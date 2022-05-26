import getWeatherAPI from './getWeatherAPI';
import getKelvinToCelsius from './getKelvinToCelsius';
import getDate from './getDate';
import getHour from './getHour';

const getDom = () => {
  const name = document.querySelector('.name');
  const temp = document.querySelector('.temp');
  const feelsLike = document.querySelector('.feelsLike');
  const humidity = document.querySelector('.humidity');
  const pressure = document.querySelector('.pressure');
  const sunrise = document.querySelector('.sunrise');
  const sunset = document.querySelector('.sunset');
  const visibility = document.querySelector('.visibility');
  const weather = document.querySelector('.weather');
  const windDeg = document.querySelector('.windDeg');
  const windSpeed = document.querySelector('.windSpeed');
  const clouds = document.querySelector('.clouds');

  const writeWeatherData = async () => {
    try {
      const recData = await getWeatherAPI('campinas');
      console.log(recData);

      // unit conversion before writing
      const currTemp = getKelvinToCelsius(recData.main.temp);
      const feelTemp = getKelvinToCelsius(recData.main.feels_like);
      const sunriseTime = getHour(recData.sys.sunrise);
      const sunsetTime = getHour(recData.sys.sunset);

      // formatted name
      const formatName = `${recData.name}, ${recData.sys.country}`;
      name.textContent = formatName;
      temp.textContent = `Current temperature: ${currTemp} ºC`;
      feelsLike.textContent = `Feels like: ${feelTemp} ºC`;
      humidity.textContent = `Humidity: ${recData.main.humidity} %`;
      pressure.textContent = `Pressure: ${recData.main.pressure} mb`;
      sunrise.textContent = `Sunrise: ${sunriseTime}`;
      sunset.textContent = `Sunset: ${sunsetTime}`;
      visibility.textContent = `Visibility: ${recData.visibility}`;
      weather.textContent = `Current Weather: ${recData.weather[0].description}`;
      windDeg.textContent = `Wind Degree: ${recData.wind.deg}`;
      windSpeed.textContent = `Wind Speed: ${recData.wind.speed}`;
      clouds.textContent = `Clouds: ${recData.clouds.all}`;
    } catch (err) {
      console.log(err);
    }
  };
  writeWeatherData();
};

export default getDom;
