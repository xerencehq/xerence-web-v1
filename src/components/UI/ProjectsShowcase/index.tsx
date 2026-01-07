'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Tag } from '@/components/Common';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
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

const FEATURED_PROJECTS = [
  {
    slug: 'insyt',
    title: 'Insyt Analytics',
    description: 'An intelligent analytics platform that transforms raw data into actionable insights using AI-powered analysis.',
    image: '/images/projects/insyt.jpg',
    tags: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
  },
  {
    slug: 'finflow',
    title: 'FinFlow',
    description: 'A modern financial management platform for startups and SMEs with real-time reporting.',
    image: '/images/projects/finflow.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    slug: 'healthtech-app',
    title: 'HealthTech Mobile App',
    description: 'Cross-platform mobile application for healthcare providers with appointment scheduling and telemedicine.',
    image: '/images/projects/healthtech.jpg',
    tags: ['React Native', 'Firebase', 'WebRTC'],
  },
];

const ProjectsShowcase: React.FC = () => {
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

        <ProjectsGrid
          as={motion.div}
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {FEATURED_PROJECTS.slice(0, 2).map((project, index) => (
            <ProjectCard
              as={motion(Link)}
              href={`/projects/${project.slug}`}
              key={index}
              variants={fadeInUpVariant}
              data-testid="project-card"
            >
              <ProjectImage>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '14px'
                }}>
                  {project.title}
                </div>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagsContainer>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex} variant="outline">{tag}</Tag>
                  ))}
                </TagsContainer>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

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
