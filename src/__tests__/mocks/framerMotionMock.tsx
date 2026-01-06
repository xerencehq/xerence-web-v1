/* eslint-disable react/display-name, @next/next/no-img-element, jsx-a11y/alt-text, import/no-anonymous-default-export */
import React from 'react';

// Mock framer-motion to avoid animation issues in tests
const motion = {
  div: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )),
  span: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <span ref={ref} {...props}>
      {children}
    </span>
  )),
  p: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <p ref={ref} {...props}>
      {children}
    </p>
  )),
  h1: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <h1 ref={ref} {...props}>
      {children}
    </h1>
  )),
  h2: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <h2 ref={ref} {...props}>
      {children}
    </h2>
  )),
  h3: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <h3 ref={ref} {...props}>
      {children}
    </h3>
  )),
  section: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <section ref={ref} {...props}>
      {children}
    </section>
  )),
  article: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <article ref={ref} {...props}>
      {children}
    </article>
  )),
  header: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <header ref={ref} {...props}>
      {children}
    </header>
  )),
  footer: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <footer ref={ref} {...props}>
      {children}
    </footer>
  )),
  nav: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <nav ref={ref} {...props}>
      {children}
    </nav>
  )),
  ul: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <ul ref={ref} {...props}>
      {children}
    </ul>
  )),
  li: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <li ref={ref} {...props}>
      {children}
    </li>
  )),
  a: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <a ref={ref} {...props}>
      {children}
    </a>
  )),
  button: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <button ref={ref} {...props}>
      {children}
    </button>
  )),
  img: React.forwardRef((props: any, ref: any) => <img ref={ref} {...props} />),
  svg: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <svg ref={ref} {...props}>
      {children}
    </svg>
  )),
  path: React.forwardRef((props: any, ref: any) => <path ref={ref} {...props} />),
  form: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <form ref={ref} {...props}>
      {children}
    </form>
  )),
  input: React.forwardRef((props: any, ref: any) => <input ref={ref} {...props} />),
  textarea: React.forwardRef((props: any, ref: any) => <textarea ref={ref} {...props} />),
};

// Set display names for debugging
Object.keys(motion).forEach((key) => {
  (motion as any)[key].displayName = `motion.${key}`;
});

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
