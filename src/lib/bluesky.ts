import { BSKY_IDENTIFIER, BSKY_PASSWORD, BSKY_SERVICE_URL } from '$env/static/private'
import {AtpAgent} from '@atproto/api'

const agent = new AtpAgent({
  service: BSKY_SERVICE_URL
})

await agent.login({
  identifier: BSKY_IDENTIFIER,
  password: BSKY_PASSWORD
})

export const listMyPosts = () => agent.getAuthorFeed({
  actor: agent.did ?? '',
  filter: 'posts_no_replies',
  limit: 5
})