import { parse } from 'marked'

export const load = async (event) => {
  const slug = event.params.slug

  const modules = await Promise.all([
    import(`$lib/pages/${slug}/index.ts`),
    import(`$lib/pages/${slug}/index.md?raw`)
  ])

  return {
    metadata: modules[0].default,
    html: await parse(modules[1].default)
  }
}