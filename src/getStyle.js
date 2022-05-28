import searchIcon from './img/icons/magnify.svg';
import humidityIcon from './img/icons/humidity-svgrepo-com.svg';
import uvIcon from './img/icons/sun-svgrepo-com.svg';

const getStyle = () => {
  const goBtn = document.querySelector('.go');
  goBtn.innerHTML = searchIcon;

  const humiditySvg = document.querySelector('.humiditySvg');
  humiditySvg.innerHTML = humidityIcon;

  const uvSvg = document.querySelector('.uvSvg');
  uvSvg.innerHTML = uvIcon;
};

export default getStyle;
