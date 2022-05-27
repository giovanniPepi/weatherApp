import getWeatherAPI from './getWeatherAPI';
import getDate from './getDate';
import getHour from './getHour';
import getWindDir from './getWindDir';
import verifyRain from './verifyRain';
import verifySnow from './verifySnow';
import getNowTime from './getNowTime';
import convertToKm from './convertToKm';
import getNeatDate from './getNeatDate';

const getDom = (lat, lon, loc) => {
  // queries
  const name = document.querySelector('.name');
  const date = document.querySelector('.date');
  const time = document.querySelector('.time');
  const temp = document.querySelector('.temp');
  const feelsLike = document.querySelector('.feelsLike');
  const humidity = document.querySelector('.humidity');
  const uv = document.querySelector('.uv');
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
  const daily = document.querySelector('.daily');

  // writing to DOM
  const writeWeatherData = async () => {
    try {
      const recData = await getWeatherAPI(lat, lon);
      console.log(recData);

      // unit conversion before writing
      const sunriseTime = getHour(recData.current.sunrise);
      const sunsetTime = getHour(recData.current.sunset);
      const windSpeedKm = convertToKm(recData.current.wind_speed);

      // shows current hour without seconds
      const nowHour = getNowTime();
      const timeDate = getDate();
      const windDir = getWindDir(recData.current.wind_deg);
      const tempRound = recData.current.temp.toFixed(1);
      const feelRound = recData.current.feels_like.toFixed(1);

      name.textContent = loc;
      date.textContent = timeDate;
      time.textContent = nowHour;
      temp.textContent = `Current temperature: ${tempRound} ºC`;
      feelsLike.textContent = `Feels like: ${feelRound} ºC`;
      humidity.textContent = `Humidity: ${recData.current.humidity} %`;
      uv.textContent = `UV Index: ${recData.current.uvi}`;
      pressure.textContent = `Pressure: ${recData.current.pressure} hPa`;
      sunrise.textContent = `Sunrise: ${sunriseTime}`;
      sunset.textContent = `Sunset: ${sunsetTime}`;
      visibility.textContent = `Visibility: ${
        recData.current.visibility / 1000
      } km`;
      weather.textContent = `Current Weather: ${recData.current.weather[0].description}`;
      windDeg.textContent = `Wind Direction: ${windDir}`;
      windSpeed.textContent = `Wind Speed: ${windSpeedKm} km/h`;
      clouds.textContent = `Cloud coverage: ${recData.current.clouds} %`;

      // check if rain and snow data are present
      if (verifyRain(recData)) {
        rain1h.textContent = `Rain volume in the last hour: ${recData.current.rain['1h']} mm`;
      }
      if (verifySnow(recData)) {
        snow1h.textContent = `Snow volume in the last hour: ${recData.current.snow['1h']} mm`;
      }

      // daily forecast in an array
      const dailyArray = [];
      dailyArray.push(...recData.daily);

      // pushes to a new array only data that we want
      const dailyTemps = [];
      dailyArray.forEach((day) =>
        dailyTemps.push([
          day.temp.min,
          day.temp.max,
          day.uvi,
          day.pop,
          day.weather[0].description,
          getNeatDate(day.dt)
        ])
      );

      // write each day forecasted to DOM
      for (const day of dailyTemps) {
        const dayContainer = document.createElement('div');

        const dayDate = document.createElement('div');
        const dayDateValue = day[5];
        dayDate.textContent = dayDateValue;

        const dayMin = document.createElement('div');
        const dayMinValue = day[0];
        dayMin.textContent = dayMinValue;

        const dayMax = document.createElement('div');
        const dayMaxValue = day[1];
        dayMax.textContent = dayMaxValue;

        const uviMax = document.createElement('div');
        const uviMaxValue = day[2];
        uviMax.textContent = uviMaxValue;

        const rainProb = document.createElement('div');
        const rainProbValue = day[3];
        rainProb.textContent = rainProbValue;

        const weatherDesc = document.createElement('div');
        const weatherDescValue = day[4];
        weatherDesc.textContent = weatherDescValue;

        // appends
        dayContainer.appendChild(dayDate);
        dayContainer.appendChild(dayMin);
        dayContainer.appendChild(dayMax);
        dayContainer.appendChild(uviMax);
        dayContainer.appendChild(rainProb);
        dayContainer.appendChild(weatherDesc);

        daily.appendChild(dayContainer);
      }
      //write forecast to DOM
    } catch (err) {
      console.log(err);
      // name.textContent = 'Oooops, there seems to be a network error!';
    }
  };
  writeWeatherData();
};

export default getDom;
