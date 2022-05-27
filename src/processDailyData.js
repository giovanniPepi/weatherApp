import getNeatDate from './getNeatDate';

const processDailyData = (recArray) => {
  // pushes to a new array only data that we want
  const dailyTemps = [];
  recArray.forEach((day) =>
    dailyTemps.push([
      day.temp.min,
      day.temp.max,
      day.uvi,
      day.pop,
      day.weather[0].description,
      getNeatDate(day.dt)
    ])
  );
  return dailyTemps;
};

export default processDailyData;
