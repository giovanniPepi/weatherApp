const getWindDir = (deg) => {
  let windDir;

  switch (true) {
    case deg < 90:
      windDir = 'North';
      break;
    case deg >= 90 && deg < 180:
      windDir = 'East';
      break;
    case deg >= 180 && deg < 270:
      windDir = 'South';
      break;
    case deg >= 270 && deg < 360:
      windDir = 'West';
      break;
    default:
      windDir = 'Ooops...';
  }
  return windDir;
};
// JEST
module.exports = getWindDir;

// export default getWindDir;
