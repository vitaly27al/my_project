import '/scss/main.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeader } from './components/fixed';
import { useFooterAccordion } from './components/accordion';
import {
  usePartnersSlider,
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider';

useTheme();
useBurger();
useHeader();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
useFooterAccordion();
