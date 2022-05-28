// strips seconds from localeTime
const getNowTime = (timezone) => {
  const nowHour = new Date(
    new Date().toLocaleString('en-US', { timeZone: `${timezone}` })
  )
    .toString()
    .slice(0, 21);

  return nowHour;
};
export default getNowTime;
