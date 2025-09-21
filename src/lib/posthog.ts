import { PostHog } from 'posthog-node'

function PostHogClient() {
    const postHogClient = new PostHog(process.env.POSTHOG_KEY, {
        host: process.env.POSTHOG_HOST
    })

    return postHogClient
}

export default PostHogClient