import getWeatherAPI from './getWeatherAPI';
import getDate from './getDate';
import getHour from './getHour';
import getWindDir from './getWindDir';

const getDom = () => {
  const name = document.querySelector('.name');
  const time = document.querySelector('.time');
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
  const rain1h = document.querySelector('.rain1h');
  const rain3h = document.querySelector('.rain3h');
  const snow1h = document.querySelector('.snow1h');
  const snow3h = document.querySelector('.snow3h');

  const writeWeatherData = async () => {
    try {
      const recData = await getWeatherAPI('campinas');
      console.log(recData);

      // unit conversion before writing
      const sunriseTime = getHour(recData.sys.sunrise);
      const sunsetTime = getHour(recData.sys.sunset);
      const timeDate = getDate();
      const windDir = getWindDir(recData.wind.deg);
      const tempRound = recData.main.temp.toFixed(1);
      const feelRound = recData.main.feels_like.toFixed(1);
      // formatted name
      const formatName = `${recData.name}, ${recData.sys.country}`;
      name.textContent = formatName;
      time.textContent = timeDate;
      temp.textContent = `Current temperature: ${tempRound} ºC`;
      feelsLike.textContent = `Feels like: ${feelRound} ºC`;
      humidity.textContent = `Humidity: ${recData.main.humidity} %`;
      pressure.textContent = `Pressure: ${recData.main.pressure} hPa`;
      sunrise.textContent = `Sunrise: ${sunriseTime}`;
      sunset.textContent = `Sunset: ${sunsetTime}`;
      visibility.textContent = `Visibility: ${recData.visibility}`;
      weather.textContent = `Current Weather: ${recData.weather[0].description}`;
      windDeg.textContent = `Wind Direction: ${windDir}`;
      windSpeed.textContent = `Wind Speed: ${recData.wind.speed} m/s`;
      clouds.textContent = `Cloud coverage: ${recData.clouds.all} %`;
      rain1h.textContent = `Rain volume in the last hour: ${recData.rain['1h']} mm`;
      rain3h.textContent = `Rain volume in the last 3 hours: ${recData.rain['3h']} mm`;
      snow1h.textContent = `Snow volume in the last hour: ${recData.snow['1h']} mm`;
      snow3h.textContent = `Snow volume in the last 3 hours: ${recData.snow['3h']} mm`;
    } catch (err) {
      console.log(err);
    }
  };
  writeWeatherData();
};

export default getDom;
