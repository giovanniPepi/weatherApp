const getTime = (ms) => {
  const date = new Date(ms);
  return date.toDateString();
};

export default getTime;
