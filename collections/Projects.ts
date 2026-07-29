import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'updatedAt'],
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Used to sort the projects on the portfolio page. Lower numbers appear first.',
      },
    },
    {
      name: 'credits',
      type: 'array',
      label: 'Credits / Credentials',
      admin: {
        description: 'Add team members and their roles for this project (e.g., Director, VFX).',
      },
      fields: [
        {
          name: 'role',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., DIRECTOR, VFX, PRODUCER',
          },
        },
        {
          name: 'names',
          type: 'array',
          required: true,
          minRows: 1,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
