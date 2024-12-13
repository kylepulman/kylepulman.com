type FeedItem = {
  _source: 'Pages' | 'Bsky'
  title: string
  description?: string
  createdAt: string
  slug: string
}

export const load = async () => {
  const feed: FeedItem[] = [
    {
      _source: 'Pages',
      title: 'Test Post',
      description: 'This is a test post.',
      createdAt: '2024-12-13T15:55:55.732Z',
      slug: 'test-post'
    },
    {
      _source: 'Bsky',
      title: 'Test Bsky Post',
      createdAt: '2024-12-13T15:55:55.732Z',
      slug: 'bsky-post'
    }
  ]

  return {
    feed
  }
}