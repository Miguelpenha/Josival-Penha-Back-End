import fs from 'fs'
import pathScreenshot from './pathScreenshot'
import pathScreenshotConfig from './pathScreenshotConfig'

interface IConfig {
    last: string
}

function revalidateScreenshot(revalidate: boolean): { getNewScreenshot: boolean } {
    if (revalidate) {
        return { getNewScreenshot: true }
    } else {
        const exists = fs.existsSync(pathScreenshot)

        if (exists) {
            const config: IConfig = JSON.parse(fs.readFileSync(pathScreenshotConfig).toString())
            const dateNow = new Date().toLocaleDateString('pt-br', { timeZone: 'UTC' })
            const dateLastScreenshot = new Date(config.last).toLocaleDateString('pt-br')

            return { getNewScreenshot: dateNow != dateLastScreenshot }
        } else {
            return { getNewScreenshot: true }
        }
    }
}

export default revalidateScreenshot