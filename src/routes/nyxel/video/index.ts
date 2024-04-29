import express from 'express'
import generateScript from './generateScript'
import companies from './companies'
// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import path from 'path'
import fs from 'fs'

const videoRouter = express.Router()

videoRouter.get('/', (req, res) => {
    const hostURL = req.get('Origin')
    const company = companies.find(company => company.hostURL === hostURL && company)

    console.log(hostURL, company)

    if (company) {
        const scriptPath = path.resolve(__dirname, '..', '..', '..', '..', 'scripts', 'domain.js')
        const script = fs.readFileSync(scriptPath).toString().replace(/{{domain}}/g, process.env.DOMAIN)

        res.contentType('application/javascript')
        res.send(script)
    } else {
        res.status(404)
        res.json({ message: 'Company not found' })
    }
})

videoRouter.get('/page/:page?', async (req, res) => {
    const hostURL = req.get('Origin')
    const company = companies.find(company => company.hostURL === hostURL && company)
    
    if (company) {
        const { page: routeURL } = req.params
        const route = company.routes.find(route => route.url === ('/'+(routeURL || '')) && route)

        if (route) {
            const urlVideo = `${process.env.AWS_BASE_URL}/videos/${company.folderURL}/${route.videoURL}`
            const script = generateScript(company.name, urlVideo, company.actionText, company.contactURL)
    
            res.contentType('application/javascript')
            res.send(script)
        } else {
            res.status(404)
            res.json({ message: 'Page not found' })
        }
    } else {
        res.status(404)
        res.json({ message: 'Company not found' })
    }
})

export default videoRouter