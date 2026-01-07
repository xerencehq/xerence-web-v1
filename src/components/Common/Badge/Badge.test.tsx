import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import Badge from './index';

describe('Badge', () => {
  it('should render badge with text', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByTestId('badge')).toHaveTextContent('New');
  });

  it('should render with default variant', () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('should render with success variant', () => {
    render(<Badge variant="success">Success</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('should render with warning variant', () => {
    render(<Badge variant="warning">Warning</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('should render with error variant', () => {
    render(<Badge variant="error">Error</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('should render with info variant', () => {
    render(<Badge variant="info">Info</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('should render with small size', () => {
    render(<Badge size="sm">Small</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('should render with medium size', () => {
    render(<Badge size="md">Medium</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });
});
