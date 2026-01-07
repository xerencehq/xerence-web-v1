'use client';

import React from 'react';
import { StyledBadge } from './styles';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
}) => (
  <StyledBadge $variant={variant} $size={size} data-testid="badge">
    {children}
  </StyledBadge>
);

export default Badge;
