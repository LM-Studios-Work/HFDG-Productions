import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const { docs: projects } = await payload.find({
      collection: 'projects',
      limit: 100,
    })

    let updatedCount = 0

    for (const project of projects) {
      if (!project.credits) continue

      let modified = false
      const newCredits = project.credits.map((credit: any) => {
        let newRole = credit.role
        if (newRole === 'VFX') {
          newRole = 'Director of Photography'
          modified = true
        } else if (newRole === 'Graphic Designer') {
          newRole = 'Edited by'
          modified = true
        }
        return { ...credit, role: newRole }
      })

      if (modified) {
        await payload.update({
          collection: 'projects',
          id: project.id,
          data: {
            credits: newCredits,
          },
        })
        updatedCount++
      }
    }

    return NextResponse.json({ message: `Successfully updated ${updatedCount} project(s)` })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
