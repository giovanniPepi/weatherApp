const getEventListeners = () => {
  const search = document.querySelector('#search').value;
  const searchBtn = document.querySelector('.go');

  searchBtn.addEventListener('click', () => {
    console.log(search);
  });
};
export default getEventListeners;
