import clearIcon from './img/icons/weather-sunny.svg';
import rainIcon from './img/icons/weather-rainy.svg';
import cloudIcon from './img/icons/weather-cloudy.svg';

const setWeatherIcon = (currentWeather) => {
  switch (currentWeather) {
    case 'Clear':
      return clearIcon;
    case 'Rain':
      return rainIcon;
    case 'Clouds':
      return cloudIcon;
    default:
      console.log('oooooooooooooooooops');
  }
};

export default setWeatherIcon;
