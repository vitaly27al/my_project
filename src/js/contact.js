import '/scss/contact.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeader } from './components/fixed';
import { useMap } from './components/contact/map';
import { usePhone } from './components/contact/phone';
import { usePartnersSlider } from './components/home/slider';
import { useFooterAccordion } from './components/accordion';

useTheme();
useBurger();
useHeader();
useMap();
usePhone();
usePartnersSlider();
useFooterAccordion();
