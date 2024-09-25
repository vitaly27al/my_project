import '/scss/pricing.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeader } from './components/fixed';
import { useFooterAccordion } from './components/accordion';
import { usePriceSwitcher } from './components/pricing/priceSwitcher';

useTheme();
useBurger();
useHeader();
useFooterAccordion();
usePriceSwitcher();
