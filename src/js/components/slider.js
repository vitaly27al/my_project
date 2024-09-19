import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
