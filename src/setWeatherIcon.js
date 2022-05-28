import clearIcon from './img/icons/weather-sunny.svg';
import rainIcon from './img/icons/weather-rainy.svg';
import cloudIcon from './img/icons/weather-cloudy.svg';
import moonIcon from './img/icons/weather-night.svg';
import snowIcon from './img/icons/snowflake.svg';
import getNowTime from './getNowTime';

const setWeatherIcon = (weather, time, future) => {
  // convert to hours to check night
  const timeNow = getNowTime(time).getHours();

  // night boolean check
  const condition1 = timeNow > 19;
  const condition2 = timeNow < 7;
  const night = condition1 || condition2;

  switch (weather) {
    case 'Clear':
      // future is used to show icons on forecast
      if (!night || future) return clearIcon;
      return moonIcon;
    case 'Rain':
      return rainIcon;
    case 'Clouds':
      return cloudIcon;
    case 'Snow':
      return snowIcon;
    default:
      console.log('Different weather detected');
  }
};

export default setWeatherIcon;
