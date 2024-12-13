# How This Website Came Together

A cursory search for developer portfolio website inspiration results in a wash of trendy-looking, design-first websites that spell CSS hell to my "function over form" sensibilities. Dig a bit deeper and you get some more well-rounded options. Personally, I'm a fan of [Brittany Chiang](https://brittanychiang.com/) and [Anthony Fu's](https://antfu.me/) approaches, both of which are aesthetically pleasing without sacrificing the purpose of the website. 

If you're like me, however, and you've gotten bogged down in the drudgery of building the ideal website that perfectly describes you as a developer, you're just looking to get something up that you can start directing interested parties toward. After all, you can always change it later.

I built this site in just a few hours, and it's not anything special, but does what it's supposed to do and that's it.

## The Purpose of the Site

This website should reflect my knowledge as a developer, and indicate my development activities. The home page is a feed of my activity, pulling from blog posts written in Markdown, along with external feeds.

## Ingredients

I'm using SvelteKit as it's the framework I've worked with the most and therefore the one I could get up-and-running in most quickly. Upon running `npx sv create`, I've opted to initialize the project with TypeScript, ESLint, and Tailwind.

To mitigate any design choices that may get in the way, I've opted for [daisyUI](https://daisyui.com/). It's a good-looking component library with one of the simplest Tailwind set-ups I've encountered.

For the Markdown-sourced blog posts, my first inclination was to reach for [MDsveX](https://mdsvex.pngwn.io/), the self-proclaimed "MDX for Svelte". Unfortunately, I encountered some friction trying to get it to work with the most recent version of Svelte 5, and decided to continue down the path of simplicity, opting for [Marked](https://marked.js.org/). 

Marked turns markdown into HTML, which means that I can't use a YAML-like header for the post metadata. Instead of trying a higher-abstraction library, I again chose the simple route of including a `.ts` file that exports an object of metadata content. Easy-peasy.

### Where I'm keeping my blog posts

```
lib
  pages
    how-this-website-came-to-be
      index.md
      index.ts
    etc...
```

### The metadata object

```ts
export default {
  title: "How This Website Came Together",
  description: "A breakdown of how I built this site in a few hours.",
  createdAt: '2024-12-12T20:48:28.858Z'
} satisfies PageMetadata
```

After hearing that Bluesky had good developer support (likely a response to the missteps of Twitter over the past few years), I decided to check out its API and ho-boy is it exciting. Along with links to my markdown posts, I've included my posts on Bluesky to the feed as well. The API client was shockingly easy to get set up, and I'm excited to learn more about it, the [AT Protocol](https://atproto.com/), and see what other developers create with it.

## How the Site Works

Using SvelteKit's filesystem-based router, I've created a discrete home page, which houses a brief header and the feed. The rest of the site exists as these posts. 

You can see the entire source code for this website on [my GitHub](https://github.com/kylepulman/kylepulman.com).