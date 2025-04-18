import express, { Request } from 'express'
import videoRouter from './video'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import multer from 'multer'
import ICompany from '../../types/company'
import companiesModel from '../../models/company'
import { v4 as uuidv4 } from 'uuid'

const nyxelRouter = express.Router()

nyxelRouter.use('/video', videoRouter)

const client = new S3Client({ region: 'sa-east-1' })

const upload = multer({ storage: multer.memoryStorage() })

type IRequestRegisterCompany = Omit<ICompany, '_id' | 'routes' | 'created'>

nyxelRouter.post('/companies', async (req: Request<{}, {}, IRequestRegisterCompany>, res) => {
    const company = req.body

    const folderName = `${company.name}-${uuidv4()}`
    const folderURL = `videos/${folderName}/`

    const command = new PutObjectCommand({
        Body: '',
        Key: folderURL,
        Bucket: 'nyxel',
        ContentLength: 0
    })

    await client.send(command)

    try {
        await companiesModel.create({
            name: company.name,
            color: company.color,
            scale: company?.scale,
            folderURL: folderName,
            hostURL: company.hostURL,
            caption: company?.caption,
            actionText: company.actionText,
            bottom: {
                mobile: company.bottom?.mobile,
                desktop: company.bottom?.desktop
            },
            cta: {
                url: company.cta.url,
                type: company.cta.type,
                text: company.cta.text,
                internal: company.cta.internal,
            }
        })
    
        res.json({ created: true })
    } catch (error) {
        res.json({ error, created: false })
    }
})

nyxelRouter.get('/companies', async (req, res) => {
    const companies = await companiesModel.find()

    res.json(companies)
})

nyxelRouter.get('/companies/:companyFolderURL', async (req, res) => {
    const { companyFolderURL } = req.params

    const company = await companiesModel.findOne({ companyFolderURL })

    res.json(company)
})

nyxelRouter.post('/companies/:companyFolderURL/route', upload.single('video'), async (req: Request<{ companyFolderURL: string }, {}, { url: string }>, res) => {
    const { companyFolderURL } = req.params
    const { url } = req.body

    const company = await companiesModel.findOne({ companyFolderURL })

    const videoName = `video-${uuidv4()}`
    const key = `videos/${company.folderURL}/${videoName}`

    const command = new PutObjectCommand({
        Key: key,
        Bucket: 'nyxel',
        ACL: 'public-read',
        Body: req.file.buffer,
        ContentType: req.file.mimetype
    })

    await client.send(command)

    try {
        company.routes.push({ url, videoURL: videoName } as any)

        await company.save()
    
        res.json({ created: true })
    } catch (error) {
        res.json({ error, created: false })
    }
})

export default nyxelRouter