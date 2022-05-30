const getNight = (timeNow) => {
  // night boolean check
  const condition1 = timeNow > 19;
  const condition2 = timeNow < 7;
  const night = condition1 || condition2;
  return night;
};
export default getNight;
