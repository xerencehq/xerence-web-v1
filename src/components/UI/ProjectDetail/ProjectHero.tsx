'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tag } from '@/components/Common';
import { urlForImage } from '@/sanity/lib/image';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import type { Project } from '@/types/sanity';
import {
  HeroWrapper,
  HeroImageWrapper,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroTags,
} from './styles';

export interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  const imageUrl = project.featuredImage
    ? urlForImage(project.featuredImage)?.width(1920).height(800).url()
    : null;

  return (
    <HeroWrapper data-testid="project-hero">
      {imageUrl && (
        <HeroImageWrapper>
          <Image
            src={imageUrl}
            alt={project.featuredImage?.alt || project.title}
            fill
            priority
            sizes="100vw"
          />
          <div className="overlay" />
        </HeroImageWrapper>
      )}

      <HeroContent
        as={motion.div}
        variants={staggerContainerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUpVariant}>
          <HeroTitle>{project.title}</HeroTitle>
        </motion.div>

        <motion.div variants={fadeInUpVariant}>
          <HeroDescription>{project.description}</HeroDescription>
        </motion.div>

        {project.techStack && project.techStack.length > 0 && (
          <HeroTags as={motion.div} variants={fadeInUpVariant}>
            {project.techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </HeroTags>
        )}
      </HeroContent>
    </HeroWrapper>
  );
};
