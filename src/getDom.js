import getWeatherAPI from './getWeatherAPI';

const getDom = () => {
  const name = document.querySelector('.name');
  const temp = document.querySelector('.temp');
  const feelsLike = document.querySelector('.feelsLike');
  const humidity = document.querySelector('.humidity');
  const pressure = document.querySelector('.pressure');
  const tempMax = document.querySelector('.tempMax');
  const tempMin = document.querySelector('.tempMin');
  const sunrise = document.querySelector('.sunrise');
  const sunset = document.querySelector('.sunset');
  const visibility = document.querySelector('.visibility');
  const weather = document.querySelector('.weather');
  const windDeg = document.querySelector('.windDeg');
  const windSpeed = document.querySelector('.windSpeed');
  const clouds = document.querySelector('.clouds');

  const writeData = async () => {
    const recData = await getWeatherAPI('campinas');

    // formatted name
    const formatName = `${recData.name}, ${recData.sys.country}`;
    name.textContent = formatName;

    temp.textContent = recData.main.temp;
    feelsLike.textContent = recData.main.feels_like;
    humidity.textContent = recData.main.humidity;
    pressure.textContent = recData.main.pressure;
    tempMax.textContent = recData.main.temp_max;
    tempMin.textContent = recData.main.temp_min;
    sunrise.textContent = recData.sys.sunsrise;
    sunset.textContent = recData.sys.sunset;
    visibility.textContent = recData.visibility;
    weather.textContent = recData.weather.description;
    windDeg.textContent = recData.wind.deg;
    windSpeed.textContent = recData.wind.windSpeed;
    clouds.textContent = recData.clouds.all;
  };
  writeData();
};

export default getDom;
