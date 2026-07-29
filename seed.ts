import { getPayload } from 'payload'
import configPromise from './payload.config'

async function seed() {
  console.log('Initializing Payload...')
  const payload = await getPayload({ config: configPromise })

  console.log('Fetching media...')
  const { docs: mediaDocs } = await payload.find({
    collection: 'media',
    limit: 100,
  })

  if (mediaDocs.length === 0) {
    console.log('No media found. Cannot seed projects.')
    process.exit(0)
  }

  const potAroundMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("potaround"))
  const fightMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("fight"))
  const agentsMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("agents"))

  console.log('Clearing existing projects...')
  const existingProjects = await payload.find({ collection: 'projects', limit: 100 })
  for (const p of existingProjects.docs) {
    await payload.delete({ collection: 'projects', id: p.id })
  }

  console.log('Creating projects...')

  const projectsToCreate = []

  if (potAroundMedia) {
    projectsToCreate.push({
      title: 'Pot Around',
      description: 'A cinematic lifestyle piece exploring the culture.',
      video: potAroundMedia.id,
      order: 1,
      credits: [
        { role: 'VFX', names: 'Matt Wauhkonen, Wade Ivy' },
        { role: 'Graphic Designer', names: 'Darby Faccinto' },
      ]
    })
  }

  if (fightMedia) {
    projectsToCreate.push({
      title: 'Fight Sports Centre',
      description: 'High-energy promotional video for a premier boxing gym.',
      video: fightMedia.id,
      order: 2,
      credits: [
        { role: 'Director', names: 'Seth Worley' },
        { role: 'Producer', names: 'Chris Lee' },
      ]
    })
  }

  if (agentsMedia) {
    projectsToCreate.push({
      title: 'The Agents',
      description: 'An action-packed sequence showcasing our dynamic camera work.',
      video: agentsMedia.id,
      order: 3,
      credits: [
        { role: 'Director', names: 'Jane Doe' },
        { role: 'VFX', names: 'John Smith' },
      ]
    })
  }

  for (const p of projectsToCreate) {
    await payload.create({
      collection: 'projects',
      data: p,
    })
    console.log(`Created project: ${p.title}`)
  }

  console.log('Done seeding projects!')
  process.exit(0)
}

seed().catch(console.error)
