export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');
  const priceText = document.querySelectorAll('[data-price="text"]');
  const priceList = {
    starter: {
      default: '$' + 120,
      yearlySale: '$' + 120 * 12 * 0.8,
    },

    popular: {
      default: '$' + 1680,
      yearlySale: '$' + 1400 * 12 * 0.8,
    },

    enterprise: {
      default: '$' + 2520,
      yearlySale: '$' + 2100 * 12 * 0.8,
    },

    priceTime: {
      default: '/mo',
      yearlySale: '/yr',
    },
  };

  const setPricesYearlySale = () => {
    starterPrice.textContent = priceList.starter.yearlySale;
    popularPrice.textContent = priceList.popular.yearlySale;
    enterprisePrice.textContent = priceList.enterprise.yearlySale;
    priceText.forEach((span) => {
      const textType = span.dataset.text;
      span.textContent = priceList.priceTime.yearlySale;
    });
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;
    priceText.forEach((span) => {
      const textType = span.dataset.text;
      span.textContent = priceList.priceTime.default;
    });
  };

  switcher.checked = true;
  setPricesYearlySale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesYearlySale();
    } else {
      setDefaultPrices();
    }
  });
};
