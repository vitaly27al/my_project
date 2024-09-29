import '/scss/activity.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeader } from './components/fixed';
import { useActivityTab } from './components/activity/tab';
import { useActivitySlider, useArticlesSlider } from './components/slider';
import { useFooterAccordion } from './components/accordion';

useTheme();
useBurger();
useHeader();
useActivityTab();
useActivitySlider();
useArticlesSlider();
useFooterAccordion();
