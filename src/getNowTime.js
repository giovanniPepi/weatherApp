// strips seconds from localeTime
const getNowTime = () => {
  const nowHour = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
  return nowHour;
};
export default getNowTime;
