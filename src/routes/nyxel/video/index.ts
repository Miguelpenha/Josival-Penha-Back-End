import express from 'express'
import companiesModel from '../../../models/company'
import path from 'path'
import fs from 'fs'
import generateScript from './generateScript'

const videoRouter = express.Router()

videoRouter.get('/', async (req, res) => {
    const hostURLRaw = req.get('Origin') || req.get('Referer')

    if (hostURLRaw) {
        const hostURL = new URL(hostURLRaw)
        const company = await companiesModel.findOne({
            hostURL: { $regex: hostURL.origin, $options: 'i' }
        })

        if (company) {
            const scriptPath = path.resolve(__dirname, '..', '..', '..', '..', 'scripts', 'domain.js')
            const script = fs.readFileSync(scriptPath).toString().replaceAll('{{domain}}', process.env.DOMAIN)

            res.contentType('application/javascript')
            res.send(script)
        } else {
            res.status(404)
            res.json({ message: 'Company not found' })
        }
    } else {
        res.status(200).json({ message: 'Invalid URL' })
    }
})

videoRouter.get('/page/:page(.+)?', async (req, res) => {
    const hostURL = req.get('Origin') || req.get('Referer')
    const company = await companiesModel.findOne({
        hostURL: { $regex: hostURL, $options: 'i' }
    })
    
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