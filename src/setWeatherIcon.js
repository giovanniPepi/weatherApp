import clearIcon from './img/icons/weather-sunny.svg';
import rainIcon from './img/icons/weather-pouring.svg';
import cloudIcon from './img/icons/weather-cloudy.svg';
import moonIcon from './img/icons/weather-night.svg';
import snowIcon from './img/icons/snowflake.svg';
import thunderIcon from './img/icons/weather-lightning.svg';
import getNowTime from './getNowTime';
import getNight from './getNight';

const setWeatherIcon = (weather, time, future) => {
  // convert to hours to check night
  const timeNow = getNowTime(time).getHours();

  // night check
  getNight(timeNow);

  switch (weather) {
    case 'Clear':
      // future is used to show icons on forecast
      if (!getNight || future) return clearIcon;
      return moonIcon;
    case 'Rain':
    case 'Drizzle':
      return rainIcon;
    case 'Thunderstorm':
      return thunderIcon;
    case 'Clouds':
      return cloudIcon;
    case 'Snow':
      return snowIcon;
    default:
      console.log('Different weather detected');
  }
};

export default setWeatherIcon;
