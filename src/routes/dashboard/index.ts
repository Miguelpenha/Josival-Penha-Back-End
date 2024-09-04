import express, { Request } from 'express'
import getScreenshot from './getScreenshot'
import revalidateScreenshot from './revalidateScreenshot'
import fs from 'fs'
import pathScreenshot from './pathScreenshot'

interface IQuery {
    revalidate?: string | null
}

const dashboardRouter = express.Router()

dashboardRouter.get('/', async (req: Request<{}, {}, {}, IQuery>, res) => {
    const { revalidate } = req.query
    
    const { getNewScreenshot } = revalidateScreenshot(revalidate && revalidate == 'true')
    let screenshot: Buffer
    
    if (getNewScreenshot) {
        const { error, screenshot: screenshotNew } = await getScreenshot()

        screenshot = screenshotNew

        if (!screenshot) {
            return res.status(500).json(error)
        }
    } else {
        screenshot = fs.readFileSync(pathScreenshot)
    }

    res.setHeader('content-type', 'image/jpeg')
    res.send(screenshot)
})

dashboardRouter.get('/revalidate', async (req: Request<{}, {}, {}, IQuery>, res) => {
    res.json({ revalidating: true })

    await getScreenshot()
})

export default dashboardRouter