/* eslint-disable react/display-name, @next/next/no-img-element, jsx-a11y/alt-text, import/no-anonymous-default-export */
import React from 'react';

// Helper to create a motion component that filters out framer-motion props
const createMotionComponent = (Element: any) =>
  React.forwardRef(({ children, ...props }: any, ref: any) => {
    // Filter out framer-motion specific props
    const {
      initial, animate, exit, variants, transition, whileHover, whileTap,
      whileFocus, whileDrag, whileInView, viewport, onAnimationStart,
      onAnimationComplete, layout, layoutId, drag, dragConstraints,
      dragElastic, dragMomentum, onDragStart, onDrag, onDragEnd,
      ...validProps
    } = props;

    return React.createElement(Element, { ref, ...validProps }, children);
  });

// Motion elements for common HTML elements
const motionElements: Record<string, any> = {
  div: createMotionComponent('div'),
  span: createMotionComponent('span'),
  p: createMotionComponent('p'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
  h3: createMotionComponent('h3'),
  h4: createMotionComponent('h4'),
  h5: createMotionComponent('h5'),
  h6: createMotionComponent('h6'),
  section: createMotionComponent('section'),
  article: createMotionComponent('article'),
  header: createMotionComponent('header'),
  footer: createMotionComponent('footer'),
  nav: createMotionComponent('nav'),
  ul: createMotionComponent('ul'),
  li: createMotionComponent('li'),
  a: createMotionComponent('a'),
  button: createMotionComponent('button'),
  img: createMotionComponent('img'),
  svg: createMotionComponent('svg'),
  path: createMotionComponent('path'),
  form: createMotionComponent('form'),
  input: createMotionComponent('input'),
  textarea: createMotionComponent('textarea'),
};

// Set display names for debugging
Object.keys(motionElements).forEach((key) => {
  motionElements[key].displayName = `motion.${key}`;
});

// Create motion as both a function and an object with element properties
// This supports both motion.div and motion(Link) patterns
const motion = Object.assign(
  // Function form: motion(Component) returns a motion-wrapped component
  (Component: any) => createMotionComponent(Component),
  // Object form: motion.div, motion.span, etc.
  motionElements
);

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const useAnimation = () => ({
  start: jest.fn(),
  stop: jest.fn(),
  set: jest.fn(),
});
export const useInView = () => true;
export const useScroll = () => ({ scrollY: { get: () => 0 }, scrollYProgress: { get: () => 0 } });
export const useTransform = () => 0;
export const useSpring = () => 0;
export const useMotionValue = (initial: number) => ({
  get: () => initial,
  set: jest.fn(),
  onChange: jest.fn(),
});
export const useReducedMotion = () => false;

export { motion };
export default { motion, AnimatePresence };
