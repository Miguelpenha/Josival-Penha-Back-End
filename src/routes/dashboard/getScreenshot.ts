import puppeteer, { Browser } from 'puppeteer'
import optionsBrowser from './optionsBrowser'
import optionsScreenshot from './optionsScreenshot'
import fs from 'fs'
import pathScreenshotConfig from './pathScreenshotConfig'

async function getScreenshot() {
    let browser: Browser

    try {
        browser = await puppeteer.launch(optionsBrowser)
        const page = await browser.newPage()
    
        await page.goto(process.env.BETA_DASHBOARD_URL)
        await page.waitForSelector('.ng2-canvas-container')
        await page.waitForFunction(() => setTimeout(() => true, 10*1000 /*10 seconds*/))

        const screenshot = await page.screenshot(optionsScreenshot)
        
        const date = new Date().toLocaleDateString('pt-br', { timeZone: 'UTC' })
        const configJSON = JSON.stringify({ last: date }, null, '   ')

        fs.writeFileSync(pathScreenshotConfig, configJSON)
    
        await browser.close()
        
        return { screenshot, error: null }
    } catch (details) {
        console.log(details)

        return {
            error: {
                details,
                error: 'Error on get screenshot'
            }
        }
    } finally {
        await browser.close()
    }
}

export default getScreenshot