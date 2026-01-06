// Import jest-dom for extended matchers
import '@testing-library/jest-dom';

// Import styled-components jest utilities
import 'jest-styled-components';

// Mock IntersectionObserver
import './src/__tests__/mocks/intersectionObserverMock';

// Mock Next.js router
jest.mock('next/navigation', () => require('./src/__tests__/mocks/nextRouterMock'));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});
