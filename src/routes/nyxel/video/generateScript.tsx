import ICompany from '../../../types/company'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { renderToString } from 'react-dom/server'
import React from 'react'
import useTheme from './VideoElement/useTheme'
import VideoElement from './VideoElement'
import fs from 'fs'
import path from 'path'

function generateScript(company: ICompany, urlVideo: string) {
    const sheet = new ServerStyleSheet()
    const theme = useTheme(company)
    const videoElementRendered = renderToString(
        sheet.collectStyles(
            <ThemeProvider theme={theme}>
                <VideoElement company={company} urlVideo={urlVideo}/>
            </ThemeProvider>
        )
    )
    const styleElement = sheet.getStyleTags().replaceAll('\n', '')

    const scriptPath = path.resolve(__dirname, '..', '..', '..', '..', 'scripts', 'video.js')
    const scriptRaw = fs.readFileSync(scriptPath).toString()
    const script = scriptRaw
    .replaceAll('{{color}}', theme.color)
    .replaceAll('{{videoURL}}', urlVideo)
    .replaceAll('{{styleElement}}', styleElement)
    .replaceAll('{{scale}}', String(company.scale || 1))
    .replaceAll('{{videoElement}}', videoElementRendered)
    .replaceAll('{{contactURL}}', company.cta ? company.cta.url : '')
    .replaceAll('{{bottomMobile}}', String(company?.bottom?.mobile || 45))
    .replaceAll('{{bottomDesktop}}', String(company?.bottom?.desktop || 45))
    .replaceAll('{{ctaRedirect}}', company.cta ? (company.cta.internal ? '_self' : '_blank') : '')
    
    return script
}

export default generateScript