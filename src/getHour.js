const getHour = (ms) => {
  // unix epoch to date
  const newEpoch = ms * 1000;
  const date = new Date(newEpoch);
  return date.toLocaleTimeString();
};

export default getHour;
