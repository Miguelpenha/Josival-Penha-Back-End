import puppeteer from 'puppeteer'
import optionsBrowser from './optionsBrowser'
import optionsScreenshot from './optionsScreenshot'
import fs from 'fs'
import pathScreenshotConfig from './pathScreenshotConfig'

async function getScreenshot() {
    try {
        const browser = await puppeteer.launch(optionsBrowser)
    
        const page = await browser.newPage()
    
        await page.goto(process.env.BETA_DASHBOARD_URL, { waitUntil: 'networkidle0' })

        await page.waitForSelector('.ng2-canvas-container')
    
        const screenshot = await page.screenshot(optionsScreenshot)

        fs.writeFileSync(pathScreenshotConfig, JSON.stringify({ last: new Date(
            new Date().toLocaleDateString('pt-br', { timeZone: 'UTC' })
        ).toLocaleString('pt-br') }, null, '   '))
    
        await browser.close()
        
        return { screenshot, error: null }
    } catch (details) {
        return {
            error: {
                details,
                error: 'Error on get screenshot'
            }
        }
    }
}

export default getScreenshot