import getDate from './getDate';

const getFutureDay = (days) => {
  let ftrDate = new Date();

  ftrDate = ftrDate.setDate(ftrDate.getDate() + days);
  ftrDate = new Date(ftrDate);
  ftrDate = ftrDate.toString().slice(3, 10);

  return ftrDate;
};

export default getFutureDay;
