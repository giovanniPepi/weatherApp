const getHour = (ms) => {
  // unix epoch to date
  const newEpoch = ms * 1000;
  const date = new Date(newEpoch);
  // console.log(date.toTimeString());
  return date.toTimeString();
};

export default getHour;
