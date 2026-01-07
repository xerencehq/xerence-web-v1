'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tag } from '@/components/Common';
import { urlForImage } from '@/sanity/lib/image';
import type { ProjectListItem } from '@/types/sanity';
import {
  CardWrapper,
  CardImageWrapper,
  ImagePlaceholder,
  CardContent,
  CardTitle,
  CardDescription,
  CardTags,
  CardMeta,
} from './styles';

export interface ProjectCardProps {
  project: ProjectListItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const imageUrl = project.featuredImage
    ? urlForImage(project.featuredImage)?.width(600).height(400).url()
    : null;

  const visibleTags = project.techStack?.slice(0, 4) || [];
  const remainingCount = (project.techStack?.length || 0) - 4;

  return (
    <CardWrapper
      as={motion(Link)}
      href={`/projects/${project.slug.current}`}
      data-testid="project-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <CardImageWrapper>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={project.featuredImage?.alt || project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <ImagePlaceholder data-testid="image-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </ImagePlaceholder>
        )}
      </CardImageWrapper>

      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>

        {visibleTags.length > 0 && (
          <CardTags>
            {visibleTags.map((tech) => (
              <Tag key={tech} variant="outline">
                {tech}
              </Tag>
            ))}
            {remainingCount > 0 && (
              <Tag variant="outline">+{remainingCount}</Tag>
            )}
          </CardTags>
        )}

        {project.clientName && (
          <CardMeta>Client: {project.clientName}</CardMeta>
        )}
      </CardContent>
    </CardWrapper>
  );
};
