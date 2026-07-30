import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { HomePage } from './globals/HomePage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Projects],
  globals: [HomePage],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: true,
  }),
  plugins: [
    s3Storage({
      collections: {
        media: {
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename, prefix }) => {
            const baseUrl = (
              process.env.R2_PUBLIC_URL ||
              process.env.S3_PUBLIC_URL ||
              process.env.R2_SUBDOMAIN ||
              process.env.R2_URL ||
              process.env.S3_URL ||
              ''
            ).replace(/\/$/, '')
            const key = prefix ? `${prefix}/${filename}` : filename
            return baseUrl ? `${baseUrl}/${key}` : key
          },
        },
      },
      bucket: process.env.S3_BUCKET || '',
      clientUploads: true, // Enable direct client uploads to bypass Vercel serverless 4.5MB limit
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || 'auto',
        endpoint: process.env.S3_ENDPOINT || '',
      },
    }),
  ],
})
