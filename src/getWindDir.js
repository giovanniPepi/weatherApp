const getWindDir = (deg) => {
  let windDir;

  switch (true) {
    case deg < 40 || deg === 360:
      windDir = 'North';
      break;
    case deg >= 40 && deg < 90:
      windDir = 'Northeast';
      break;
    case deg >= 90 && deg < 135:
      windDir = 'East';
      break;
    case deg >= 135 && deg < 180:
      windDir = 'Southeast';
      break;
    case deg >= 180 && deg < 225:
      windDir = 'South';
      break;
    case deg >= 225 && deg < 270:
      windDir = 'Southwest';
      break;
    case deg >= 270 && deg < 315:
      windDir = 'West';
      break;
    case deg >= 315 && deg < 360:
      windDir = 'Northwest';
      break;
    default:
      windDir = 'Ooops...';
  }
  return windDir;
};
// JEST
module.exports = getWindDir;

// export default getWindDir;
