import type { PageMetadata } from '$lib'
import { error } from '@sveltejs/kit'
import { parse } from 'marked'

export const load = async (event) => {
  const slug = event.params.slug

  const modules = await Promise.all<[
    Promise<{ default: PageMetadata }>,
    Promise<{ default: string }>
  ]>([
    import(`$lib/pages/${slug}/index.ts`),
    import(`$lib/pages/${slug}/index.md?raw`)
  ]).catch(() => {
    throw error(404)
  })

  const metadata = modules[0].default

  if (metadata.isPublic) { 
    return {
      metadata,
      html: await parse(modules[1].default)
    }
  }

  throw error(404)
}