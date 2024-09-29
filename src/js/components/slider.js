import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const usePartnersSlider = () => {
  let mySwiper;
  const partnersSlider = document.querySelector('.partners_slider');

  function mobileSlider() {
    if (window.innerWidth <= 768 && partnersSlider.dataset.mobile == 'false') {
      mySwiper = new Swiper(partnersSlider, {
        modules: [Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        centeredSlides: true,
        slideClass: 'partners_item',
        autoplay: {
          delay: 1000,
        },
      });

      partnersSlider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 768) {
      partnersSlider.dataset.mobile = 'false';
      if (mySwiper) {
        mySwiper.destroy();
        mySwiper = null;
      }
    }
  }

  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
  });
};

/////////////////////////////////////////////////////////
export const useInsightSlider = () => {
  new Swiper('.insight_slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.insight_swiper-btn-next',
      prevEl: '.insight_swiper-btn-prev',
    },

    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials_slider', {
    modules: [Autoplay, Navigation, EffectFade],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: '.testimonials_btn--next',
      prevEl: '.testimonials_btn--prev',
    },
  });
};

export const useAboutHeroSlider = () => {
  new Swiper('.hero_slider', {
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    centeredSlides: false,

    breakpoints: {
      381: {
        slidesPerView: 1.2,
      },
      577: {
        slidesPerView: 1.4,
        centeredSlides: true,
      },
      769: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      993: {
        slidesPerView: 2.3,
        spaceBetween: 32,
      },
    },
  });
};

export const useAboutTeamSlider = () => {
  new Swiper('.team_slider', {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 16,
    initialSlide: 1,

    breakpoints: {
      1201: {
        slidesPerView: 'auto',
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 32,
      },
      993: {
        slidesPerView: 'auto',
        initialSlide: 1,
        spaceBetween: 32,
        centeredSlides: true,
      },
      577: {
        slidesPerView: 'auto',
        centeredSlides: true,
      },
    },
  });
};

export const useActivitySlider = () => {
  new Swiper('.hero_slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    initialSlide: 0,

    breakpoints: {
      1201: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 32,
      },
    },
  });
};
export const useArticlesSlider = () => {
  new Swiper('.articles_slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 16,
    initialSlide: 0,

    breakpoints: {
      1201: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 32,
      },
    },

    navigation: {
      nextEl: '.articles_btn--next',
      prevEl: '.articles_btn--prev',
    },
  });
};
