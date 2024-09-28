import '/scss/about.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeader } from './components/fixed';
import { useFooterAccordion } from './components/accordion';
import { useAboutHeroSlider, useAboutTeamSlider } from './components/slider';

useTheme();
useBurger();
useHeader();
useFooterAccordion();
useAboutHeroSlider();
useAboutTeamSlider();
