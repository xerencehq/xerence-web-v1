'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { staggerContainerVariant, staggerItemVariant } from '@/styles';
import type { Project } from '@/types/sanity';
import {
  MainContent,
  ContentSection,
  SectionTitle,
  ContentText,
  OutcomesList,
  OutcomeItem,
} from './styles';

export interface ProjectContentProps {
  project: Project;
}

export const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  const hasProblem = project.problem && project.problem.length > 0;
  const hasSolution = project.solution && project.solution.length > 0;
  const hasOutcomes = project.outcomes && project.outcomes.length > 0;

  if (!hasProblem && !hasSolution && !hasOutcomes) {
    return null;
  }

  return (
    <MainContent
      as={motion.div}
      variants={staggerContainerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      data-testid="project-content"
    >
      {hasProblem && (
        <ContentSection as={motion.div} variants={staggerItemVariant}>
          <SectionTitle>The Challenge</SectionTitle>
          <ContentText>
            <PortableText value={project.problem!} />
          </ContentText>
        </ContentSection>
      )}

      {hasSolution && (
        <ContentSection as={motion.div} variants={staggerItemVariant}>
          <SectionTitle>The Solution</SectionTitle>
          <ContentText>
            <PortableText value={project.solution!} />
          </ContentText>
        </ContentSection>
      )}

      {hasOutcomes && (
        <ContentSection as={motion.div} variants={staggerItemVariant}>
          <SectionTitle>Outcomes</SectionTitle>
          <OutcomesList>
            {project.outcomes!.map((outcome, index) => (
              <OutcomeItem key={index}>
                <span className="check">✓</span>
                {outcome}
              </OutcomeItem>
            ))}
          </OutcomesList>
        </ContentSection>
      )}
    </MainContent>
  );
};
