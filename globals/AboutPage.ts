import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: 'About Page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroMedia',
      label: 'Hero Video or Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'The media displayed in the About hero section. Defaults to existing pot around video if blank. Can be image or video.',
      },
    },
    {
      name: 'teamMembers',
      label: 'Team Members',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            description: 'Portrait photo. Will fallback to a solid color if not provided.',
          },
        },
      ],
    },
    {
      name: 'gallery',
      label: 'Behind the Scenes Gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: false,
          admin: {
            description: 'Caption or description for the image (shown on hover).',
          },
        },
      ],
    },
  ],
}
