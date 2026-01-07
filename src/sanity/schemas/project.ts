import { defineField, defineType } from 'sanity';
import type { ArrayDefinition, FieldDefinition } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'problem',
      title: 'The Problem',
      type: 'blockContent',
      description: 'Describe the problem or challenge this project addressed',
    }),
    defineField({
      name: 'solution',
      title: 'The Solution',
      type: 'blockContent',
      description: 'Describe how you solved the problem',
    }),
    {
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key results and metrics achieved',
    } as FieldDefinition,
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    } as FieldDefinition,
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    } as FieldDefinition,
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    } as FieldDefinition,
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      description: 'Optional - leave blank for internal projects',
    }),
    {
      name: 'clientLogo',
      title: 'Client Logo',
      type: 'image',
      description: 'Optional - client company logo',
      options: {
        hotspot: true,
      },
    } as FieldDefinition,
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Optional - live project URL',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
      description: 'Show this project on the homepage',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      featured: 'isFeatured',
    },
    prepare(selection) {
      const { title, media, featured } = selection;
      return {
        title: featured ? `⭐ ${title}` : title,
        media,
      };
    },
  },
});
