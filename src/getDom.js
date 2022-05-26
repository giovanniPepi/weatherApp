import getWeatherAPI from './getWeatherAPI';
import getKelvinToCelsius from './getKelvinToCelsius';

const getDom = () => {
  const name = document.querySelector('.name');
  const temp = document.querySelector('.temp');
  const feelsLike = document.querySelector('.feelsLike');
  const humidity = document.querySelector('.humidity');
  const pressure = document.querySelector('.pressure');
  const tempMax = document.querySelector('.tempMax');
  const tempMin = document.querySelector('.tempMin');
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

      // formatted name
      const formatName = `${recData.name}, ${recData.sys.country}`;
      name.textContent = formatName;
      temp.textContent = `Current temperature: ${currTemp} ºC`;
      feelsLike.textContent = `Feels like: ${feelTemp} ºC`;
      humidity.textContent = `Humidity: ${recData.main.humidity} %`;
      pressure.textContent = `Pressure: ${recData.main.pressure} mb`;
      tempMax.textContent = `Max Temperature: ${maxTempCel} ºC`;
      tempMin.textContent = `Minimum Temperature: ${minTempCel} ºC`;
      sunrise.textContent = `Sunrise: ${recData.sys.sunrise}`;
      sunset.textContent = `Sunset: ${recData.sys.sunset}`;
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
