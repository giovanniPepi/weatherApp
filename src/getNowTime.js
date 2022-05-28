// strips seconds from localeTime
const getNowTime = (timezone) => {
  const nowHour = new Date(
    new Date().toLocaleString('en-US', { timeZone: `${timezone}` })
  )
    .toString()
    .slice(16, 21);

  return nowHour;
};
export default getNowTime;
