export const useBurger = () => {
  const burgerBtn = document.querySelector('[data-burger="btn"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');
  const body = document.body;

  const closeBurgerMenu = () => {
    burgerBtn.classList.remove('burger--active');
    burgerMenu.classList.remove('header_right--visible');
    overlay.classList.remove('overlay--visible');
    body.classList.remove('body--fixed');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('header_right--visible');
    overlay.classList.toggle('overlay--visible');
    body.classList.toggle('body--fixed');
  });

  overlay.addEventListener('click', closeBurgerMenu);
};
