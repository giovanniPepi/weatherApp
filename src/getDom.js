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

const getDom = (lat, lon, loc, country) => {
  // queries
  const name = document.querySelector('.name');
  const date = document.querySelector('.date');
  const time = document.querySelector('.time');
  const temp = document.querySelector('.temp');
  const feelsLike = document.querySelector('.feelsLike');
  const humidity = document.querySelector('.humidity');
  const uv = document.querySelector('.uv');
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
      const recData = await getWeatherAPI(lat, lon, country);
      console.log('Onecall API: ', recData);

      // unit conversion before writing
      // slices out seconds, keep am/PM
      const sunriseTime = `${getHour(recData.current.sunrise).slice(0, 5)}`;

      const sunsetTime = `${getHour(recData.current.sunset).slice(0, 5)}`;
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
      humidity.textContent = `${recData.current.humidity}%`;
      uv.textContent = `UV ${getFixedNumber(recData.current.uvi, 0)}`;
      sunrise.textContent = `${sunriseTime}`;
      sunset.textContent = `${sunsetTime}`;
      console.log(sunriseTime, '+', sunsetTime);
      visibility.textContent = `${recData.current.visibility / 1000} km`;
      weather.textContent = capitalizeFirst(
        recData.current.weather[0].description
      );
      windDeg.textContent = `${windDir}`;
      windSpeed.textContent = `${windSpeedKm} km/h`;
      clouds.textContent = `Clouds ${recData.current.clouds} %`;

      // check if rain and snow data are present and shows it
      if (verifyRain(recData.current)) {
        rain1h.textContent = `${recData.current.rain['1h']} mm`;
        rain1hCont.style.display = 'flex';
        rain1hCont.style.alignItems = 'center';
        rain1hCont.style.justifyContent = 'space-between';
        rain1hCont.style.gap = '0.5rem';
      } else {
        rain1h.textContent = '';
        rain1hCont.style.display = 'none';
      }
      if (verifySnow(recData.current)) {
        snow1h.textContent = `${recData.current.snow['1h']} mm`;
        snow1hCont.style.display = 'flex';
        snow1hCont.style.alignItems = 'center';
        snow1hCont.style.justifyContent = 'space-between';
        snow1hCont.style.gap = '0.5rem';
      } else {
        snow1h.textContent = '';
        snow1hCont.style.display = 'none';
      }

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

        const tempContainer = document.createElement('div');
        tempContainer.setAttribute('class', 'forecastItemContainer');
        const dayMin = document.createElement('div');
        const dayMinValue = getFixedNumber(day[0], 0);
        dayMin.textContent = `${dayMinValue} ºC`;
        const minTempSvg = document.createElement('svg');
        minTempSvg.setAttribute('class', 'minTempSvg');

        const tempContainer2 = document.createElement('div');
        tempContainer2.setAttribute('class', 'forecastItemContainer');
        const dayMax = document.createElement('div');
        const dayMaxValue = getFixedNumber(day[1], 0);
        dayMax.textContent = `${dayMaxValue} ºC`;
        const maxTempSvg = document.createElement('div');
        maxTempSvg.setAttribute('class', 'maxTempSvg');

        const uvRainContainer = document.createElement('div');
        uvRainContainer.setAttribute('class', 'forecastItemContainer');
        const uviMax = document.createElement('div');
        const uviMaxValue = getFixedNumber(day[2], 0);
        uviMax.textContent = `UV ${uviMaxValue}`;
        const uvigSvg = document.createElement('svg');
        uvigSvg.setAttribute('class', 'uvSvg');

        const rainProb = document.createElement('div');
        const rainProbValue = `${(day[3] * 100).toFixed(0)}%`;
        rainProb.textContent = rainProbValue;
        const rainSvg = document.createElement('svg');
        rainSvg.setAttribute('class', 'rainPercent');

        const weatherContainer = document.createElement('div');
        weatherContainer.setAttribute('class', 'forecastItemContainer');
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
        dayDate.setAttribute('class', 'dayDate');
        const dayDateValue = day[5];
        dayDate.textContent = dayDateValue;

        // appends
        tempContainer.appendChild(minTempSvg);
        tempContainer.appendChild(dayMin);
        tempContainer.appendChild(maxTempSvg);
        tempContainer.appendChild(dayMax);
        uvRainContainer.appendChild(uvigSvg);
        uvRainContainer.appendChild(uviMax);
        uvRainContainer.appendChild(rainSvg);
        uvRainContainer.appendChild(rainProb);
        weatherContainer.appendChild(weatherIcon);
        weatherContainer.appendChild(weatherDesc);

        dayContainer.appendChild(dayDate);
        dayContainer.appendChild(weatherContainer);
        dayContainer.appendChild(tempContainer);
        dayContainer.appendChild(tempContainer2);
        dayContainer.appendChild(uvRainContainer);

        daily.appendChild(dayContainer);
      }

      // calls styling(variable icons)

      // check for alerts and cleans afterwards
      if (verifyAlerts(recData)) {
        alerts.textContent = recData.alerts[0].description;
        getStyle(recData.current.weather[0].main, recData.timezone, true);
      } else {
        getStyle(recData.current.weather[0].main, recData.timezone, false);
        alerts.textContent = '';
      }
    } catch (err) {
      console.log(err);
      name.textContent = 'Oooops, there seems to be a network error!';
    }
  };
  writeWeatherData();
};

export default getDom;
