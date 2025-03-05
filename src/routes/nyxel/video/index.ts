import express from 'express'
import generateScript from './generateScript'
import companies from './companies'
import path from 'path'
import fs from 'fs'

const videoRouter = express.Router()

videoRouter.get('/', (req, res) => {
    const hostURL = new URL(req.get('Origin') || req.get('Referer'))
    const company = companies.find(company => company.hostURL.includes(hostURL.origin) && company)

    if (company) {
        const scriptPath = path.resolve(__dirname, '..', '..', '..', '..', 'scripts', 'domain.js')
        const script = fs.readFileSync(scriptPath).toString().replaceAll('{{domain}}', process.env.DOMAIN)

        res.contentType('application/javascript')
        res.send(script)
    } else {
        res.status(404)
        res.json({ message: 'Company not found' })
    }
})

videoRouter.get('/page/:page(.+)?', async (req, res) => {
    const hostURL = req.get('Origin') || req.get('Referer')
    const company = companies.find(company => company.hostURL.includes(hostURL) && company)
    
    if (company) {
        const { page: routeURLRaw } = req.params

        const route = company.routes.find(route => {
            const routeURL = ('/'+(routeURLRaw || ''))

            if (route.url.endsWith('/*')) {
                if (routeURL.startsWith(route.url.replace('/*', ''))) {
                    return route
                }
            } else if (route.url === routeURL) {
                return route
            }
        })

        if (route) {
            const urlVideo = `${process.env.AWS_BASE_URL}/videos/${company.folderURL}/${route.videoURL}`
            const script = generateScript(company, urlVideo)
    
            res.contentType('application/javascript')
            res.send(script)
        } else {
            res.contentType('application/javascript')
            res.send('')
        }
    } else {
        res.status(404)
        res.json({ message: 'Company not found' })
    }
})

export default videoRouter