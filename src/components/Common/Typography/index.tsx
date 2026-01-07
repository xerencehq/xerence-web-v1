'use client';

import React from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Lead,
  Small,
  Highlight,
} from './styles';

export interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<HeadingProps> = ({ children, className }) => (
  <Heading1 className={className} data-testid="h1">{children}</Heading1>
);

export const H2: React.FC<HeadingProps> = ({ children, className }) => (
  <Heading2 className={className} data-testid="h2">{children}</Heading2>
);

export const H3: React.FC<HeadingProps> = ({ children, className }) => (
  <Heading3 className={className} data-testid="h3">{children}</Heading3>
);

export const H4: React.FC<HeadingProps> = ({ children, className }) => (
  <Heading4 className={className} data-testid="h4">{children}</Heading4>
);

export const Text: React.FC<TextProps> = ({ children, className }) => (
  <Paragraph className={className} data-testid="text">{children}</Paragraph>
);

export const LeadText: React.FC<TextProps> = ({ children, className }) => (
  <Lead className={className} data-testid="lead">{children}</Lead>
);

export const SmallText: React.FC<TextProps> = ({ children, className }) => (
  <Small className={className} data-testid="small">{children}</Small>
);

export const HighlightText: React.FC<TextProps> = ({ children, className }) => (
  <Highlight className={className} data-testid="highlight">{children}</Highlight>
);
