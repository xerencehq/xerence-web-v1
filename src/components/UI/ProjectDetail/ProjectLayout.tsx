'use client';

import React from 'react';
import { ContentWrapper } from './styles';

export interface ProjectLayoutProps {
  children: React.ReactNode;
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};
