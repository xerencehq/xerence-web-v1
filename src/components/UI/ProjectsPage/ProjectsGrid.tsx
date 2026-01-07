'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/Forms';
import { ProjectCard } from './ProjectCard';
import { staggerContainerVariant, staggerItemVariant } from '@/styles';
import type { ProjectListItem } from '@/types/sanity';
import {
  GridWrapper,
  FiltersWrapper,
  SearchWrapper,
  TagFilters,
  ProjectsGridContainer,
  EmptyState,
  FilterTag,
} from './styles';

export interface ProjectsGridProps {
  projects: ProjectListItem[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Extract all unique tech tags
  const allTechTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.techStack?.forEach((tech) => tags.add(tech));
    });
    return Array.from(tags).sort();
  }, [projects]);

  // Filter projects based on search and tech filter
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTech =
        !selectedTech || project.techStack?.includes(selectedTech);

      return matchesSearch && matchesTech;
    });
  }, [projects, searchQuery, selectedTech]);
  console.log({searchQuery, filteredProjects});


  const handleTechFilter = (tech: string) => {
    setSelectedTech(selectedTech === tech ? null : tech);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTech(null);
  };

  return (
    <GridWrapper data-testid="projects-grid">
      <FiltersWrapper>
        {(Boolean(filteredProjects.length) || searchQuery) && 
        <SearchWrapper>
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            }
          />
        </SearchWrapper>}

        {allTechTags.length > 0 && (
          <TagFilters>
            {allTechTags.slice(0, 12).map((tech) => (
              <FilterTag
                key={tech}
                $isActive={selectedTech === tech}
                onClick={() => handleTechFilter(tech)}
                data-testid={`filter-tag-${tech}`}
              >
                {tech}
              </FilterTag>
            ))}
          </TagFilters>
        )}
      </FiltersWrapper>

      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <ProjectsGridContainer
            as={motion.div}
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
            key="projects"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project._id} variants={staggerItemVariant}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </ProjectsGridContainer>
        ) : (
          <EmptyState
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key="empty"
          >
            <p>No projects found matching your criteria.</p>
            <button onClick={clearFilters} aria-label="Clear filters">
              Clear filters
            </button>
          </EmptyState>
        )}
      </AnimatePresence>
    </GridWrapper>
  );
};
