import getWeatherAPI from './getWeatherAPI';
import getStyle from './getStyle';
import getDate from './getDate';
import getHour from './getHour';
import getWindDir from './getWindDir';
import verifyRain from './verifyRain';
import verifySnow from './verifySnow';
import getNowTime from './getNowTime';
import convertToKm from './convertToKm';
import getFixedNumber from './getFixedNumber';
import processDailyData from './processDailyData';
import capitalizeFirst from './capitalizeFirst';
import verifyAlerts from './verifyAlerts';
import setWeatherIcon from './setWeatherIcon';

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
  const rain1hCont = document.querySelector('.rain1hCont');
  const snow1h = document.querySelector('.snow1h');
  const snow1hCont = document.querySelector('.snow1hCont');
  const daily = document.querySelector('.daily');
  const alerts = document.querySelector('.alerts');

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
      const nowHour = getNowTime(recData.timezone).toString().slice(16, 21);
      const timeDate = getDate();

      // main info writing
      const windDir = getWindDir(recData.current.wind_deg);
      const tempRound = getFixedNumber(recData.current.temp, 1);
      const feelRound = getFixedNumber(recData.current.feels_like, 1);
      name.textContent = loc;
      date.textContent = timeDate;
      time.textContent = nowHour;
      temp.textContent = `${tempRound} ºC`;
      feelsLike.textContent = `Feels like ${feelRound} ºC`;
      humidity.textContent = `Humidity: ${recData.current.humidity} %`;
      uv.textContent = `UV Index: ${getFixedNumber(recData.current.uvi, 0)}`;
      pressure.textContent = `Pressure: ${recData.current.pressure} hPa`;
      sunrise.textContent = `Sunrise: ${sunriseTime}`;
      sunset.textContent = `Sunset: ${sunsetTime}`;
      visibility.textContent = `Visibility: ${
        recData.current.visibility / 1000
      } km`;
      weather.textContent = capitalizeFirst(
        recData.current.weather[0].description
      );
      windDeg.textContent = `Wind Direction: ${windDir}`;
      windSpeed.textContent = `Speed: ${windSpeedKm} km/h`;
      clouds.textContent = `Cloud coverage: ${recData.current.clouds} %`;

      // check if rain and snow data are present and shows it
      if (verifyRain(recData.current)) {
        rain1h.textContent = `Rain volume in the last hour: ${recData.current.rain['1h']} mm`;
        rain1hCont.style.display = 'flex';
      } else {
        rain1h.textContent = '';
        rain1hCont.style.display = 'none';
      }
      if (verifySnow(recData.current)) {
        snow1h.textContent = `Snow volume in the last hour: ${recData.current.snow['1h']} mm`;
        snow1hCont.style.display = 'flex';
      } else {
        snow1h.textContent = '';
        snow1hCont.style.display = 'none';
      }

      // check for alerts and cleans afterwards
      if (verifyAlerts(recData)) {
        alerts.textContent = recData.alerts[0].description;
      } else alerts.textContent = '';

      // deletes previous values before writing new ones
      const previousContainer = document.querySelector('.dayContainer');
      if (previousContainer !== null) {
        daily.innerHTML = '';
      }

      // forecast
      // process daily forecast into a neat Array
      const dailyTemps = processDailyData(recData.daily);

      // write each day forecasted to DOM
      for (const day of dailyTemps) {
        const dayContainer = document.createElement('div');
        dayContainer.setAttribute('class', 'dayContainer');

        const minContainer = document.createElement('div');
        const dayMin = document.createElement('div');
        const dayMinValue = getFixedNumber(day[0], 0);
        dayMin.textContent = dayMinValue;
        const minTempSvg = document.createElement('svg');
        minTempSvg.setAttribute('class', 'minTempSvg');

        const maxContainer = document.createElement('div');
        const dayMax = document.createElement('div');
        const dayMaxValue = getFixedNumber(day[1], 0);
        dayMax.textContent = dayMaxValue;
        const maxTempSvg = document.createElement('div');
        maxTempSvg.setAttribute('class', 'maxTempSvg');

        const uviContainer = document.createElement('div');
        const uviMax = document.createElement('div');
        const uviMaxValue = getFixedNumber(day[2], 0);
        uviMax.textContent = uviMaxValue;
        const uvigSvg = document.createElement('svg');
        uvigSvg.setAttribute('class', 'uvSvg');

        const rainContainer = document.createElement('div');
        const rainProb = document.createElement('div');
        const rainProbValue = `${(day[3] * 100).toFixed(0)} %`;
        rainProb.textContent = rainProbValue;
        const rainSvg = document.createElement('svg');
        rainSvg.setAttribute('class', 'rainPercent');

        const weatherContainer = document.createElement('div');
        const weatherDesc = document.createElement('div');
        const weatherDescValue = day[4];
        weatherDesc.textContent = capitalizeFirst(weatherDescValue);
        // icon
        const weatherIcon = document.createElement('svg');
        let weatherIconValue = day[6];
        weatherIconValue = capitalizeFirst(weatherIconValue);
        // gets SVG for forecasted data
        weatherIcon.innerHTML = setWeatherIcon(
          weatherIconValue,
          recData.timezone,
          // true because it's a future date
          true
        );

        const dayDate = document.createElement('div');
        const dayDateValue = day[5];
        dayDate.textContent = dayDateValue;

        // appends
        minContainer.appendChild(minTempSvg);
        minContainer.appendChild(dayMin);
        maxContainer.appendChild(maxTempSvg);
        maxContainer.appendChild(dayMax);
        uviContainer.appendChild(uvigSvg);
        uviContainer.appendChild(uviMax);
        rainContainer.appendChild(rainSvg);
        rainContainer.appendChild(rainProb);
        weatherContainer.appendChild(weatherIcon);
        weatherContainer.appendChild(weatherDesc);

        dayContainer.appendChild(dayDate);
        dayContainer.appendChild(minContainer);
        dayContainer.appendChild(maxContainer);
        dayContainer.appendChild(uviContainer);
        dayContainer.appendChild(rainContainer);
        dayContainer.appendChild(weatherContainer);

        daily.appendChild(dayContainer);
      }

      // calls styling(variable icons)
      getStyle(recData.current.weather[0].main, recData.timezone);
    } catch (err) {
      console.log(err);
      name.textContent = 'Oooops, there seems to be a network error!';
    }
  };
  writeWeatherData();
};

export default getDom;
