import { PuppeteerLaunchOptions } from 'puppeteer'

const optionsBrowser: PuppeteerLaunchOptions = {
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
}

export default optionsBrowser