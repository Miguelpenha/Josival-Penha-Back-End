import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { renderToString } from 'react-dom/server'
import React from 'react'
import useTheme from './useTheme'
import VideoElement from './VideoElement'
import fs from 'fs'
import path from 'path'

function generateScript(nameCompany: string, url: string, actionText: string, contactURL: string) {
    const sheet = new ServerStyleSheet()
    const theme = useTheme(nameCompany)
    const videoElementRendered = renderToString(
        sheet.collectStyles(
            <ThemeProvider theme={theme}>
                <VideoElement url={url} actionText={actionText}/>
            </ThemeProvider>
        )
    )
    const styleElement = sheet.getStyleTags().replace(/\n/g, '')

    const scriptPath = path.resolve(__dirname, '..', '..', '..', 'scripts', 'video.js')
    const scriptRaw = fs.readFileSync(scriptPath).toString()
    const script = scriptRaw
    .replace('{{videoURL}}', url)
    .replace('{{color}}', theme.color)
    .replace('{{contactURL}}', contactURL)
    .replace('{{styleElement}}', styleElement)
    .replace('{{videoElement}}', videoElementRendered)
    
    return script
}

export default generateScript