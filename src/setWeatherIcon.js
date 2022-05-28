import clearIcon from './img/icons/weather-sunny.svg';
import rainIcon from './img/icons/weather-rainy.svg';
import cloudIcon from './img/icons/weather-cloudy.svg';
import moonIcon from './img/icons/weather-night.svg';
import snowIcon from './img/icons/snowflake.svg';
import getNowTime from './getNowTime';

const setWeatherIcon = (currentWeather, time) => {
  // convert to hours
  const timeNow = getNowTime(time).getHours();

  // night boolean check
  const condition1 = timeNow > 19;
  const condition2 = timeNow < 7;
  const night = condition1 || condition2;

  switch (currentWeather) {
    case 'Clear':
      if (night) return moonIcon;
      return clearIcon;
    case 'Rain':
      return rainIcon;
    case 'Clouds':
      return cloudIcon;
    case 'Snow':
      return snowIcon;
    default:
      console.log('oooooooooooooooooops');
  }
};

export default setWeatherIcon;
