'use client';

import React from 'react';
import { StyledTag, TagRemoveButton } from './styles';

export interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  variant?: 'default' | 'outline';
}

const Tag: React.FC<TagProps> = ({
  children,
  onRemove,
  variant = 'default',
}) => (
  <StyledTag $variant={variant} data-testid="tag">
    {children}
    {onRemove && (
      <TagRemoveButton onClick={onRemove} aria-label="Remove tag">
        ×
      </TagRemoveButton>
    )}
  </StyledTag>
);

export default Tag;
