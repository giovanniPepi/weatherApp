import getWeatherAPI from './getWeatherAPI';
import getDate from './getDate';
import getHour from './getHour';
import getWindDir from './getWindDir';
import verifyRain from './verifyRain';
import verifySnow from './verifySnow';
import getNowTime from './getNowTime';
import convertToKm from './convertToKm';

const getDom = (lat, lon) => {
  // queries
  const name = document.querySelector('.name');
  const date = document.querySelector('.date');
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
  const snow1h = document.querySelector('.snow1h');

  // writing to DOM
  const writeWeatherData = async () => {
    try {
      const recData = await getWeatherAPI(lat, lon);
      console.log(recData);

      // unit conversion before writing
      const sunriseTime = getHour(recData.sys.sunrise);
      const sunsetTime = getHour(recData.sys.sunset);
      const windSpeedKm = convertToKm(recData.wind.speed);

      // shows current hour without seconds
      const nowHour = getNowTime();
      const timeDate = getDate();
      const windDir = getWindDir(recData.wind.deg);
      const tempRound = recData.main.temp.toFixed(1);
      const feelRound = recData.main.feels_like.toFixed(1);

      // joins city and contry
      const formatName = `${recData.name}, ${recData.sys.country}`;

      name.textContent = formatName;
      date.textContent = timeDate;
      time.textContent = nowHour;
      temp.textContent = `Current temperature: ${tempRound} ºC`;
      feelsLike.textContent = `Feels like: ${feelRound} ºC`;
      humidity.textContent = `Humidity: ${recData.main.humidity} %`;
      pressure.textContent = `Pressure: ${recData.main.pressure} hPa`;
      sunrise.textContent = `Sunrise: ${sunriseTime}`;
      sunset.textContent = `Sunset: ${sunsetTime}`;
      visibility.textContent = `Visibility: ${recData.visibility / 1000} km`;
      weather.textContent = `Current Weather: ${recData.weather[0].description}`;
      windDeg.textContent = `Wind Direction: ${windDir}`;
      windSpeed.textContent = `Wind Speed: ${windSpeedKm} km/h`;
      clouds.textContent = `Cloud coverage: ${recData.clouds.all} %`;

      // check if rain and snow data are present
      if (verifyRain(recData)) {
        rain1h.textContent = `Rain volume in the last hour: ${recData.rain['1h']} mm`;
      }
      if (verifySnow(recData)) {
        snow1h.textContent = `Snow volume in the last hour: ${recData.snow['1h']} mm`;
      }
    } catch (err) {
      console.log(err);
    }
  };
  writeWeatherData();
};

export default getDom;
