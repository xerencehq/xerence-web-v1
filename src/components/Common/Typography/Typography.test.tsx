import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import { H1, H2, H3, H4, Text, LeadText, SmallText, HighlightText } from './index';

describe('Typography', () => {
  it('should render H1', () => {
    render(<H1>Heading 1</H1>);
    expect(screen.getByTestId('h1')).toHaveTextContent('Heading 1');
  });

  it('should render H2', () => {
    render(<H2>Heading 2</H2>);
    expect(screen.getByTestId('h2')).toHaveTextContent('Heading 2');
  });

  it('should render H3', () => {
    render(<H3>Heading 3</H3>);
    expect(screen.getByTestId('h3')).toHaveTextContent('Heading 3');
  });

  it('should render H4', () => {
    render(<H4>Heading 4</H4>);
    expect(screen.getByTestId('h4')).toHaveTextContent('Heading 4');
  });

  it('should render Text', () => {
    render(<Text>Paragraph text</Text>);
    expect(screen.getByTestId('text')).toHaveTextContent('Paragraph text');
  });

  it('should render LeadText', () => {
    render(<LeadText>Lead text</LeadText>);
    expect(screen.getByTestId('lead')).toHaveTextContent('Lead text');
  });

  it('should render SmallText', () => {
    render(<SmallText>Small text</SmallText>);
    expect(screen.getByTestId('small')).toHaveTextContent('Small text');
  });

  it('should render HighlightText', () => {
    render(<HighlightText>Highlighted</HighlightText>);
    expect(screen.getByTestId('highlight')).toHaveTextContent('Highlighted');
  });

  it('should apply custom className', () => {
    render(<H1 className="custom">Heading</H1>);
    expect(screen.getByTestId('h1')).toHaveClass('custom');
  });
});
