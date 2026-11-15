import type { GlobalConfig } from 'payload'

export const ServicesPage: GlobalConfig = {
  slug: 'services-page',
  label: 'Services Page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'musicVideo',
      label: 'Music Video (SVC 05) Video',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'The video displayed in the Music Video service capability (SVC 05). Automatically plays on loop with no sound inside the rectangular frame.',
      },
    },
    {
      name: 'corporateVideo',
      label: 'Corporate Video (SVC 01) Video',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Optional video displayed in the Corporate Video service capability (SVC 01).',
      },
    },
    {
      name: 'realEstateVideo',
      label: 'Real Estate Media (SVC 02) Video',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Optional video displayed in the Real Estate Media service capability (SVC 02).',
      },
    },
    {
      name: 'commercialVideo',
      label: 'Commercial Production (SVC 03) Video',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Optional video displayed in the Commercial Production service capability (SVC 03).',
      },
    },
    {
      name: 'eventCoverageVideo',
      label: 'Event Coverage (SVC 04) Video',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Optional video displayed in the Event Coverage service capability (SVC 04).',
      },
    },
    {
      name: 'socialContentVideo',
      label: 'Social Content (SVC 06) Video',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Optional video displayed in the Social Content service capability (SVC 06).',
      },
    },
    {
      name: 'retainedVideo',
      label: 'Retained Production (SVC 07) Video',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Optional video displayed in the Retained Production capability (SVC 07).',
      },
    },
    {
      name: 'serviceVideos',
      label: 'Custom Service Videos List',
      type: 'array',
      admin: {
        description: 'Map any capability to an uploaded video.',
      },
      fields: [
        {
          name: 'serviceSlug',
          label: 'Service Capability',
          type: 'select',
          required: true,
          options: [
            { label: '01. Corporate Video', value: 'corporate-video' },
            { label: '02. Real Estate Media', value: 'real-estate-media' },
            { label: '03. Commercial Production', value: 'commercial-production' },
            { label: '04. Event Coverage', value: 'event-coverage' },
            { label: '05. Music Video', value: 'music-video' },
            { label: '06. Social Content', value: 'social-content' },
            { label: '07. Retained Production', value: 'full-service-retained' },
          ],
        },
        {
          name: 'video',
          label: 'Video',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}

