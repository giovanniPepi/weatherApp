const getDate = (ms) => {
  const date = new Date();
  return date.toDateString().slice(0, 11);
};

export default getDate;
