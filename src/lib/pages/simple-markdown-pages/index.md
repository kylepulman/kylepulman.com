# Markdown Pages for Your Website - The Simple Way

I tend to prefer simple solutions over easy ones. Rather than reaching for a higher abstraction like MDX, I decided to utilize a more primitive library to convert Markdown into HTML and let the tools made available through my website set up fill in the gaps.

My website is made up of [SvelteKit](https://svelte.dev/), [Tailwind CSS](https://tailwindcss.com/), and [daisyUI](https://daisyui.com/) -all of which will help deliver the Markdown pages, and make the content look good on screen. To transpile Markdown into HTML, I'm using [Marked](https://marked.js.org/), but any library that supports this feature will work. We only need it to do that.

## Frontmatter

Since we're using a low-level library, we have to handle our metadata separately. For each Markdown page, we'll have two files, one that contains the raw Markdown, and one that exports a JavaScript object containing whatever metadata we want for the page.

I keep my Markdown pages inside a directory called `pages` within a `lib` folder. Each page is composed of a directory, a Markdown file, and a TypeScript file. The directory name will inform the page's slug ("kylepulman.com/directory-name").

## Markdown Page File Structure
```
lib
  pages
    simple-markdown-pages
      index.md
      index.ts
```

## `simple-markdown-pages/index.md`
```md
# Markdown Pages for Your Website - The Simple Way

I tend to prefer simple solutions over easy ones...
```

## `simple-markdown-pages/index.ts`
```ts
import type { PageMetadata } from "$lib";

export default {
  title: "Markdown Pages for Your Website - The Simple Way",
  description: "Enrich your website with pages written with Markdown using a few low-level tools.",
  createdAt: '2024-12-15T18:24:40.553Z',
  isPublic: true
} satisfies PageMetadata
```

### `PageMetadata Type`

```ts
export type PageMetadata = {
  title: string
  description: string
  createdAt: string,
  isPublic: boolean
}
```

<blockquote>
Your metadata file can export a regular JavaScript object or be a JSON file, depending on your setup.
</blockquote>

Since our metadata is already in a web-friendly language, and our Markdown is being converted to plain-old HTML, we are free to do whatever we like with the content.

To learn more about how I implemented this is SvelteKit, check out the [repo for this website](https://github.com/kylepulman/kylepulman.com).