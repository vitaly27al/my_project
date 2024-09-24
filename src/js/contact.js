import '../assets/scss/contact.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeader } from './components/fixed';
import { usePartnersSlider } from './components/home/slider';
import { useFooterAccordion } from './components/accordion';

useTheme();
useBurger();
useHeader();
usePartnersSlider();
useFooterAccordion();
