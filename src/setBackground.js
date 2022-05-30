import clearSkyDay from './img/pexels-brett-sayles-912364_1k.jpg';
import clearSkyNight from './img/pexels-drift-shutterbug-2085998.jpg';
import rainDay from './img/pexels-brazil-topno-9604806.jpg';
import rainNight from './img/pexels-rahul-pandit-2816625_rainy.jpg';
import cloudDay from './img/pexels-pixabay-158163_clouds.jpg';
import cloudNight from './img/pexels-brett-sayles-3910141.jpg';
import snowDay from './img/pexels-pixabay-259659.jpg';
import snowNight from './img/pexels-martin-mariani-3801463.jpg';
import getNowTime from './getNowTime';
import getNight from './getNight';
import setUIcolors from './setUIcolors';

const setBackground = (body, timeNow, currentWeather) => {
  console.log(getNowTime(timeNow).getHours(), currentWeather);

  // checks if congerted timezone to hours is night
  const night = getNight(getNowTime(timeNow).getHours());

  // same for all possibilities
  body.style.backgroundSize = 'cover';

  // body.style.backgroundImage
  switch (currentWeather) {
    case 'Clear':
      if (night) {
        body.style.backgroundImage = `url(${clearSkyNight})`;
      } else {
        body.style.backgroundImage = `url(${clearSkyDay})`;
      }
      break;
    case 'Rain':
      if (night) {
        body.style.backgroundImage = `url(${rainNight})`;
      } else {
        body.style.backgroundImage = `url(${rainDay})`;
      }
      break;
    case 'Clouds':
      if (night) {
        body.style.backgroundImage = `url(${cloudNight})`;
        setUIcolors('#FDE68A', '#672dcb', '#ffffff25');
      } else {
        body.style.backgroundImage = `url(${cloudDay})`;
        setUIcolors('#f7f4f4', '#67E8F9', '#08080880');
      }
      break;
    case 'Snow':
      if (night) {
        body.style.backgroundImage = `url(${snowNight})`;
      } else {
        body.style.backgroundImage = `url(${snowDay})`;
      }
      break;
    default:
      body.style.backgroundImage = 'none';
  }
};

export default setBackground;
