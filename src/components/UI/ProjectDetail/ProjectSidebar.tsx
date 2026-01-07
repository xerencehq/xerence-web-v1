'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlForImage } from '@/sanity/lib/image';
import { staggerItemVariant } from '@/styles';
import type { Project } from '@/types/sanity';
import {
  Sidebar,
  SidebarSection,
  SidebarTitle,
  ClientInfo,
  ClientLogo,
  TechList,
  ExternalLink,
} from './styles';

export interface ProjectSidebarProps {
  project: Project;
}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ project }) => {
  const clientLogoUrl = project.clientLogo
    ? urlForImage(project.clientLogo)?.width(200).url()
    : null;

  return (
    <Sidebar
      as={motion.aside}
      variants={staggerItemVariant}
      data-testid="project-sidebar"
    >
      {project.clientName && (
        <SidebarSection>
          <SidebarTitle>Client</SidebarTitle>
          <ClientInfo>
            {clientLogoUrl && (
              <ClientLogo>
                <Image
                  src={clientLogoUrl}
                  alt={`${project.clientName} logo`}
                  width={48}
                  height={48}
                />
              </ClientLogo>
            )}
            <span>{project.clientName}</span>
          </ClientInfo>
        </SidebarSection>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <SidebarSection>
          <SidebarTitle>Tech Stack</SidebarTitle>
          <TechList>
            {project.techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </TechList>
        </SidebarSection>
      )}

      {project.projectUrl && (
        <SidebarSection>
          <ExternalLink
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project →
          </ExternalLink>
        </SidebarSection>
      )}
    </Sidebar>
  );
};
