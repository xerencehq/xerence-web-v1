'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Tag } from '@/components/Common';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import { urlForImage } from '@/sanity/lib/image';
import type { ProjectListItem } from '@/types/sanity';
import {
  ProjectsWrapper,
  ProjectsContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TagsContainer,
  CTAWrapper,
} from './styles';

export interface ProjectsShowcaseProps {
  projects: ProjectListItem[];
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ projects }) => {
  const visibleProjects = projects.slice(0, 2);

  return (
    <ProjectsWrapper data-testid="projects-showcase-section">
      <ProjectsContainer>
        <SectionHeader
          as={motion.div}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionSubtitle>
            A selection of our recent work showcasing our expertise
          </SectionSubtitle>
        </SectionHeader>

        {visibleProjects.length > 0 && (
          <ProjectsGrid
            as={motion.div}
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {visibleProjects.map((project) => {
              const imageUrl = project.featuredImage
                ? urlForImage(project.featuredImage)?.width(800).height(450).url()
                : null;

              return (
                <ProjectCard
                  as={motion(Link)}
                  href={`/projects/${project.slug.current}`}
                  key={project._id}
                  variants={fadeInUpVariant}
                  data-testid="project-card"
                >
                  <ProjectImage>
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={project.featuredImage?.alt || project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          background:
                            'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#666',
                          fontSize: '14px',
                        }}
                      >
                        {project.title}
                      </div>
                    )}
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    {project.techStack && project.techStack.length > 0 && (
                      <TagsContainer>
                        {project.techStack.map((tag) => (
                          <Tag key={tag} variant="outline">
                            {tag}
                          </Tag>
                        ))}
                      </TagsContainer>
                    )}
                  </ProjectContent>
                </ProjectCard>
              );
            })}
          </ProjectsGrid>
        )}

        <CTAWrapper
          as={motion.div}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>
        </CTAWrapper>
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default ProjectsShowcase;
