import ICompany from './company'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { renderToString } from 'react-dom/server'
import React from 'react'
import useTheme from './VideoElement/useTheme'
import VideoElement from './VideoElement'
import fs from 'fs'
import path from 'path'

function generateScript(company: ICompany, urlVideo: string) {
    const sheet = new ServerStyleSheet()
    const theme = useTheme(company.name)
    const videoElementRendered = renderToString(
        sheet.collectStyles(
            <ThemeProvider theme={theme}>
                <VideoElement company={company} urlVideo={urlVideo}/>
            </ThemeProvider>
        )
    )
    const styleElement = sheet.getStyleTags().replace(/\n/g, '')

    const scriptPath = path.resolve(__dirname, '..', '..', '..', '..', 'scripts', 'video.js')
    const scriptRaw = fs.readFileSync(scriptPath).toString()
    const script = scriptRaw
    .replace('{{color}}', theme.color)
    .replace('{{videoURL}}', urlVideo)
    .replace('{{styleElement}}', styleElement)
    .replace('{{contactURL}}', company.cta.url)
    .replace('{{scale}}', String(company.scale || 1))
    .replace('{{videoElement}}', videoElementRendered)
    
    return script
}

export default generateScript