import 'server-only';
import { client } from './client';
import {
  allProjectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  siteSettingsQuery,
} from './queries';
import type { Project, ProjectListItem, SiteSettings } from '@/types/sanity';

export async function getAllProjects(): Promise<ProjectListItem[]> {
  return client.fetch(allProjectsQuery);
}

export async function getFeaturedProjects(): Promise<ProjectListItem[]> {
  return client.fetch(featuredProjectsQuery);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(projectBySlugQuery, { slug });
}

export async function getProjectSlugs(): Promise<string[]> {
  return client.fetch(projectSlugsQuery);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(siteSettingsQuery);
}
