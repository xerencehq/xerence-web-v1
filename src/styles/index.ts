// Theme
export { theme } from './theme';
export type { Theme, ThemeColors, ThemeFontSizes, ThemeSpacing, ThemeBreakpoints } from './theme';

// Global Styles
export { GlobalStyles } from './GlobalStyles';

// Animations
export {
  // Keyframes
  fadeIn,
  fadeInUp,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  pulse,
  shimmer,
  animationMixin,
  // Framer Motion variants
  fadeInVariant,
  fadeInUpVariant,
  staggerContainerVariant,
  staggerItemVariant,
  scaleInVariant,
  slideInLeftVariant,
  slideInRightVariant,
  hoverScale,
  hoverLift,
  tapScale,
} from './animations';

// Mixins
export {
  media,
  respondTo,
  containerStyles,
  flexCenter,
  flexBetween,
  flexColumn,
  flexColumnCenter,
  gridCenter,
  truncate,
  lineClamp,
  visuallyHidden,
  overlay,
  absoluteCenter,
  buttonReset,
  inputReset,
  scrollMargin,
  gradientText,
  glassMorphism,
} from './mixins';
