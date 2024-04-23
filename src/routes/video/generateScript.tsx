import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'
import React from 'react'
import VideoElement from './VideoElement'
import fs from 'fs'
import path from 'path'

function generateScript(url: string) {
    const sheet = new ServerStyleSheet()
    const videoElementRendered = renderToString(sheet.collectStyles(<VideoElement url={url}/>))
    const styleElement = sheet.getStyleTags().replace(/\n/g, '')

    const scriptPath = path.resolve(__dirname, '..', '..', '..', 'scripts', 'video.js')
    const scriptRaw = fs.readFileSync(scriptPath).toString()
    const script = scriptRaw
    .replace('{{styleElement}}', styleElement)
    .replace('{{videoElement}}', videoElementRendered)
    .replace('{{videoURL}}', url)

    return script
}

export default generateScript