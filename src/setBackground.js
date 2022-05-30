import clearSkyDay from './img/pexels-brett-sayles-912364_1k.jpg';
import clearSkyNight from './img/pexels-eberhard-grossgasteiger-2098427.jpg';
import getNowTime from './getNowTime';
import getNight from './getNight';

const setBackground = (body, timeNow, currentWeather) => {
  console.log(getNowTime(timeNow).getHours(), currentWeather);

  // checks if converted timezone to hours is night
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

    default:
      console.log('ooops....');
  }
};

export default setBackground;
