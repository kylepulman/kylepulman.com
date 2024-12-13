import { BSKY_IDENTIFIER, VITE_BSKY_ORIGIN_URL } from "$env/static/private"
import { listMyPosts } from "$lib/bluesky"
import type { AppBskyFeedPost } from "@atproto/api"
import type { ServerLoadEvent } from "@sveltejs/kit"

type FeedItem = {
  _source: 'Pages' | 'Bsky'
  title: string
  description?: string
  createdAt: string
  href: string
}

const getPages = async () => {
  const feed: FeedItem[] = [
    {
      _source: 'Pages',
      title: 'Test Post',
      description: 'This is a test post.',
      createdAt: new Date('2024-12-13T15:55:55.732Z').toLocaleString(),
      href: 'test-post'
    },
  ]

  return feed
}

const setBsky = (event: ServerLoadEvent, bskyFeed: FeedItem[]) => {
  event.cookies.set('bsky', JSON.stringify(bskyFeed), {
    path: '/',
    httpOnly: true,
    maxAge: 5 * 60
  })
}

const getBsky = (event: ServerLoadEvent): FeedItem[] | null => {
  const bskyFeedCookie = event.cookies.get('bsky')

  if (bskyFeedCookie) {
    try {
      return JSON.parse(bskyFeedCookie) as FeedItem[]
    } catch (_err) {
      return null
    }
  } else {
    return null
  }
}

const fetchBsky = async () => {
  const feed: FeedItem[] = []

  const body = await listMyPosts()
  if (body.success === true) {
    body.data.feed.forEach((item) => {
      const record = item.post.record as AppBskyFeedPost.Record
      const postUriArray = item.post.uri.split('/')

      feed.push({
        _source: 'Bsky',
        title: record.text,
        createdAt: new Date(record.createdAt).toLocaleString(),
        href: `${VITE_BSKY_ORIGIN_URL}/profile/${BSKY_IDENTIFIER}/post/${postUriArray[postUriArray.length - 1]}`
      })
    })
  } else {
    console.error(body.success, body)
  }

  return feed
}

export const load = async (event) => {
  const pagesFeed: FeedItem[] = await getPages()

  let bskyFeed: FeedItem[] | null = getBsky(event)

  if (bskyFeed === null) {
    bskyFeed = await fetchBsky()

    setBsky(event, bskyFeed)
  }
  
  const feed: FeedItem[] = [...pagesFeed, ...bskyFeed]

  feed.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return {
    feed
  }
}