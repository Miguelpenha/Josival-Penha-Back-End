import WikiJS from 'wikijs'

async function searchContext(subject: string) {
    const wiki = WikiJS({ apiUrl: process.env.API_SEARCH_URL })

    const page = await wiki.page(subject)
    const summary = await page.summary()

    return summary
}

export default searchContext