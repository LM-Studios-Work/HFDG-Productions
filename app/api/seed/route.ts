import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const { docs: mediaDocs } = await payload.find({
      collection: 'media',
      limit: 100,
    })

    if (mediaDocs.length === 0) {
      return NextResponse.json({ message: 'No media found' })
    }

    const potAroundMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("potaround"))
    const fightMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("fight"))
    const agentsMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("agents"))

    const existingProjects = await payload.find({ collection: 'projects', limit: 100 })
    for (const p of existingProjects.docs) {
      await payload.delete({ collection: 'projects', id: p.id })
    }

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
    }

    return NextResponse.json({ message: 'Projects created successfully' })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
