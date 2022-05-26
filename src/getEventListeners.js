import getGeoAPI from './getGeoAPI';

const getEventListeners = () => {
  const search = document.querySelector('#search');
  const searchBtn = document.querySelector('.go');

  const processInpt = async (value) => {
    try {
      const geoData = await getGeoAPI(value);
      console.log(geoData);

      // generates a new array with concat name and coords
      const geoData0 = [];
      geoData0.push(`${geoData[0].name}, ${geoData[0].country}`);
      geoData0.push(`${geoData[0].lat}`);
      geoData0.push(`${geoData[0].lon}`);

      const geoData1 = [];
      geoData1.push(`${geoData[1].name}, ${geoData[1].country}`);
      geoData1.push(`${geoData[1].lat}`);
      geoData1.push(`${geoData[1].lon}`);

      console.log(geoData0);
      console.log(geoData1);
    } catch (err) {
      console.log(err);
    }
  };

  searchBtn.addEventListener('click', () => processInpt(search.value));
};

export default getEventListeners;