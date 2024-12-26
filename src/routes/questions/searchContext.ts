import WikiJS from 'wikijs'

async function searchContext(subject: string) {
    try {
        const wiki = WikiJS({ apiUrl: process.env.API_SEARCH_URL })

        const page = await wiki.page(subject)
        const summary = await page.summary()

        return summary
    } catch {
        return ''
    }
}

export default searchContext