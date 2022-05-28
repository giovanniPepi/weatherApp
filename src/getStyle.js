import searchIcon from './img/icons/magnify.svg';
import humidityIcon from './img/icons/water-outline.svg';
import uvIcon from './img/icons/white-balance-sunny.svg';
import gaugeIcon from './img/icons/gauge.svg';
import sunriseIcon from './img/icons/weather-sunny.svg';
import sunsetIcon from './img/icons/weather-sunny-off.svg';
import visibilityIcon from './img/icons/binoculars.svg';
import cloudIcon from './img/icons/cloud-percent.svg';
import windIcon from './img/icons/weather-windy.svg';
import rainIcon from './img/icons/weather-pouring.svg';
import snowIcon from './img/icons/weather-snowy.svg';
import setWeatherIcon from './setWeatherIcon';

const getStyle = (currentWeather, time) => {
  const goBtn = document.querySelector('.go');
  const humiditySvg = document.querySelector('.humiditySvg');
  const uvSvg = document.querySelector('.uvSvg');
  const pressSvg = document.querySelector('.pressSvg');
  const sunriseSvg = document.querySelector('.sunriseSvg');
  const sunsetSvg = document.querySelector('.sunsetSvg');
  const visibilitySvg = document.querySelector('.visibilitySvg');
  const cloudSvg = document.querySelector('.cloudSvg');
  const windSvg = document.querySelector('.windSvg');
  const rainSvg = document.querySelector('.rainSvg');
  const snowSvg = document.querySelector('.snowSvg');
  const weatherSvg = document.querySelector('.weatherSvg');

  goBtn.innerHTML = searchIcon;
  humiditySvg.innerHTML = humidityIcon;
  uvSvg.innerHTML = uvIcon;
  pressSvg.innerHTML = gaugeIcon;
  sunriseSvg.innerHTML = sunriseIcon;
  sunsetSvg.innerHTML = sunsetIcon;
  visibilitySvg.innerHTML = visibilityIcon;
  cloudSvg.innerHTML = cloudIcon;
  windSvg.innerHTML = windIcon;
  rainSvg.innerHTML = rainIcon;
  snowSvg.innerHTML = snowIcon;

  // process weather description icon passing through the received array, checks night
  weatherSvg.innerHTML = setWeatherIcon(currentWeather, time, false);
};

export default getStyle;
