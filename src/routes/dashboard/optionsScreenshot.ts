import { ScreenshotOptions } from 'puppeteer'
import pathScreenshot from './pathScreenshot'

const optionsScreenshot: ScreenshotOptions = {
    quality: 100,
    type: 'jpeg',
    fullPage: true,
    path: pathScreenshot
}

export default optionsScreenshot