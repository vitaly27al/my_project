import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeader } from './components/fixed';
import { useInsightSlider } from './components/slider';

useTheme();
useBurger();
useHeader();
useInsightSlider();
