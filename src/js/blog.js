import '/scss/blog.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeader } from './components/fixed';
import { useFooterAccordion } from './components/accordion';

useTheme();
useBurger();
useHeader();
useFooterAccordion();
