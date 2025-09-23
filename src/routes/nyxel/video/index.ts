import express from 'express'
import companiesModel from '../../../models/company'
import path from 'path'
import fs from 'fs'
import generateScript from './generateScript'
import PostHogClient from '../../../lib/posthog'
import { v4 } from 'uuid'

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

            const userID = req.cookies.nyxel_id || v4().toString()

            console.log(userID)

            res.cookie('nyxel_id', userID, {
                path: '/',
                secure: false,
                httpOnly: false,
                sameSite: 'none',
                maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
            })

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
    
    if (typeof hostURL === 'string') {
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

                const postHog = PostHogClient()

                postHog.capture({
                    event: 'Video loaded',
                    distinctId: company._id.toString(),
                    properties: {
                        videoURL: urlVideo,
                        routeURL: route.url,
                        videoID: route.videoURL,
                        routeID: route._id.toString(),
                        $set: {
                            name: company.name,
                            hostURL: company.hostURL
                        }
                    }
                })

                await postHog.shutdown()
            } else {
                res.contentType('application/javascript')
                res.send('')
            }
        } else {
            res.status(404)
            res.json({ message: 'Company not found' })
        }
    }
})

videoRouter.post('/events/open', async (req, res) => {
    const hostURL = req.get('Origin') || req.get('Referer')
    
    if (typeof hostURL === 'string') {
        const company = await companiesModel.findOne({
            hostURL: { $regex: hostURL, $options: 'i' }
        })
        
        if (company) {
            const { page: routeURLRaw } = req.body
    
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
                res.json({ captured: true })

                const postHog = PostHogClient()

                const urlVideo = `${process.env.AWS_BASE_URL}/videos/${company.folderURL}/${route.videoURL}`

                postHog.capture({
                    event: 'Video open',
                    distinctId: company._id.toString(),
                    properties: {
                        videoURL: urlVideo,
                        routeURL: route.url,
                        videoID: route.videoURL,
                        routeID: route._id.toString(),
                        $set: {
                            name: company.name,
                            hostURL: company.hostURL
                        }
                    }
                })

                await postHog.shutdown()
            } else {
                res.status(404)
                res.json({ message: 'Route not found' })
            }
        } else {
            res.status(404)
            res.json({ message: 'Company not found' })
        }
    }
})

videoRouter.post('/events/cta-click', async (req, res) => {
    const hostURL = req.get('Origin') || req.get('Referer')
    
    if (typeof hostURL === 'string') {
        const company = await companiesModel.findOne({
            hostURL: { $regex: hostURL, $options: 'i' }
        })
        
        if (company) {
            const { page: routeURLRaw } = req.body
    
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
                res.json({ captured: true })

                const postHog = PostHogClient()

                const urlVideo = `${process.env.AWS_BASE_URL}/videos/${company.folderURL}/${route.videoURL}`

                postHog.capture({
                    event: 'Video CTA click',
                    distinctId: company._id.toString(),
                    properties: {
                        videoURL: urlVideo,
                        routeURL: route.url,
                        videoID: route.videoURL,
                        CTAURL: company.cta.url,
                        CTAType: company.cta.type,
                        routeID: route._id.toString(),
                        CTAIsInternal: company.cta.internal,
                        $set: {
                            name: company.name,
                            hostURL: company.hostURL
                        }
                    }
                })

                await postHog.shutdown()
            } else {
                res.status(404)
                res.json({ message: 'Route not found' })
            }
        } else {
            res.status(404)
            res.json({ message: 'Company not found' })
        }
    }
})

videoRouter.post('/events/close', async (req, res) => {
    const hostURL = req.get('Origin') || req.get('Referer')
    
    if (typeof hostURL === 'string') {
        const company = await companiesModel.findOne({
            hostURL: { $regex: hostURL, $options: 'i' }
        })
        
        if (company) {
            const { page: routeURLRaw } = req.body
    
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
                res.json({ captured: true })

                const postHog = PostHogClient()

                const urlVideo = `${process.env.AWS_BASE_URL}/videos/${company.folderURL}/${route.videoURL}`

                postHog.capture({
                    event: 'Video close',
                    distinctId: company._id.toString(),
                    properties: {
                        videoURL: urlVideo,
                        routeURL: route.url,
                        videoID: route.videoURL,
                        routeID: route._id.toString(),
                        $set: {
                            name: company.name,
                            hostURL: company.hostURL
                        }
                    }
                })

                await postHog.shutdown()
            } else {
                res.status(404)
                res.json({ message: 'Route not found' })
            }
        } else {
            res.status(404)
            res.json({ message: 'Company not found' })
        }
    }
})

export default videoRouter