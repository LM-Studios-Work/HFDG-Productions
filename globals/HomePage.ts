import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page Videos & Sections',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'featuredWorkVideo',
      label: 'Featured Work Video (Work Showcase Section)',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'The video displayed in the Selected Work / Showcase section. Defaults to Pot Around video if blank.',
      },
    },
    {
      name: 'servicesVideo',
      label: 'Services Preview Video (What We Do Section)',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'The video displayed in the Services / What We Do section. Defaults to uploaded Payload media if blank.',
      },
    },
  ],
}
