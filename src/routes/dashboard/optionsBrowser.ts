import { PuppeteerLaunchOptions } from 'puppeteer'

const optionsBrowser: PuppeteerLaunchOptions = {
    headless: true,
    args: ['--no-sandbox'],
    defaultViewport: { width: 1920, height: 1080 }
}

if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    optionsBrowser.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH
}

export default optionsBrowser