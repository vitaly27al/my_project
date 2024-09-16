export const useHeader = () => {
  const header = document.querySelector('header');
  let pervScrollPos =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    const curentScrollPos =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;

    if (pervScrollPos > curentScrollPos) {
      header.classList.add('header-show');
    } else {
      header.classList.remove('header-show');
    }

    pervScrollPos = curentScrollPos;
  });
};
