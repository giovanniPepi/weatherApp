import clearSkyDay from './img/pexels-brett-sayles-912364_1k.jpg';
import clearSkyNight from './img/pexels-drift-shutterbug-2085998.jpg';
import rainDay from './img/pexels-brazil-topno-9604806.jpg';
import rainNight from './img/pexels-rahul-pandit-2816625_rainy.jpg';
import cloudDay from './img/pexels-pixabay-158163_clouds.jpg';
import cloudNight from './img/pexels-brett-sayles-3910141.jpg';
import snowDay from './img/pexels-pixabay-259659.jpg';
import snowNight from './img/pexels-martin-mariani-3801463.jpg';
import fogDay from './img/pexels-aleksandra-blinova-8659252.jpg';
import fogNight from './img/pexels-pixabay-531360.jpg';
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
        setUIcolors('#FDE68A', '#672dcb', '#ffffff25');
      } else {
        body.style.backgroundImage = `url(${clearSkyDay})`;
        setUIcolors('#f7f4f4', '#FDE047', '#0808084a');
      }
      break;
    case 'Rain':
      if (night) {
        body.style.backgroundImage = `url(${rainNight})`;
        setUIcolors('#fdfbfb', '#BEF264', '#040404ab');
      } else {
        body.style.backgroundImage = `url(${rainDay})`;
        setUIcolors('#f8f8f8', '#67e8f9', '#04040456');
      }
      break;
    case 'Clouds':
      if (night) {
        body.style.backgroundImage = `url(${cloudNight})`;
        setUIcolors('#FDE047', '#10B981', '#2c2b2b3b');
      } else {
        body.style.backgroundImage = `url(${cloudDay})`;
        setUIcolors('#f7f4f4', '#67E8F9', '#08080880');
      }
      break;
    case 'Fog':
      if (night) {
        body.style.backgroundImage = `url(${fogNight})`;
        setUIcolors('#FDE047', '#10B981', '#2c2b2b3b');
      } else {
        body.style.backgroundImage = `url(${fogDay})`;
        setUIcolors('#f7f4f4', '#67E8F9', '#08080880');
      }
      break;
    case 'Snow':
      if (night) {
        body.style.backgroundImage = `url(${snowNight})`;
        setUIcolors('#FDE68A', '#672dcb', '#ffffff25');
      } else {
        body.style.backgroundImage = `url(${snowDay})`;
        setUIcolors('#f7f4f4', '#FDE047', '#0808084a');
      }
      break;
    default:
      body.style.backgroundImage = 'none';
  }

  // fog
};
export default setBackground;
