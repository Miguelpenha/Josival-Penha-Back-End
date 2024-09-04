import { PuppeteerLaunchOptions } from 'puppeteer'

const optionsBrowser: PuppeteerLaunchOptions = {
    headless: true,
    args: ['--no-sandbox'],
    defaultViewport: { width: 1920, height: 1080 }
}

export default optionsBrowser