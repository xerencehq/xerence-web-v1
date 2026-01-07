import React from 'react';
import { render, screen } from './test-utils';
import styled from 'styled-components';

// Simple test component
const TestComponent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.background};
`;

const SimpleComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <TestComponent data-testid="test-component">
      <h1>{title}</h1>
    </TestComponent>
  );
};

describe('Testing Infrastructure Verification', () => {
  describe('Jest Setup', () => {
    it('should run a basic test', () => {
      expect(true).toBe(true);
    });

    it('should handle async tests', async () => {
      const result = await Promise.resolve(42);
      expect(result).toBe(42);
    });
  });

  describe('React Testing Library', () => {
    it('should render a component', () => {
      render(<SimpleComponent title="Test Title" />);
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('should find elements by test id', () => {
      render(<SimpleComponent title="Hello" />);
      expect(screen.getByTestId('test-component')).toBeInTheDocument();
    });
  });

  describe('Styled Components', () => {
    it('should render styled components with theme', () => {
      render(<SimpleComponent title="Styled Test" />);
      const component = screen.getByTestId('test-component');
      expect(component).toBeInTheDocument();
    });

    it('should have styled-components jest matchers available', () => {
      render(<SimpleComponent title="Matcher Test" />);
      const component = screen.getByTestId('test-component');
      expect(component).toHaveStyleRule('color', '#FFFFFF');
      expect(component).toHaveStyleRule('background', '#070606');
    });
  });

  describe('Jest DOM Matchers', () => {
    it('should have extended matchers available', () => {
      render(<SimpleComponent title="DOM Matchers" />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeVisible();
      expect(heading).toHaveTextContent('DOM Matchers');
    });
  });

  describe('Mocks', () => {
    it('should have IntersectionObserver mocked', () => {
      expect(global.IntersectionObserver).toBeDefined();
    });

    it('should have matchMedia mocked', () => {
      expect(window.matchMedia).toBeDefined();
      const result = window.matchMedia('(min-width: 768px)');
      expect(result.matches).toBe(false);
    });
  });
});
