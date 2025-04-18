import express, { Request } from 'express'
import videoRouter from './video'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import ICompany from '../../types/company'
import companiesModel from '../../models/company'
import { v4 as uuidv4 } from 'uuid'

const nyxelRouter = express.Router()

nyxelRouter.use('/video', videoRouter)

const client = new S3Client({ region: 'sa-east-1' })

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

    let company = null as any as ICompany
    const companies = await companiesModel.find()

    companies.map(companyMap => {
        if (companyMap.folderURL === companyFolderURL) {
            company = companyMap
        }
    })

    res.json(company)
})

export default nyxelRouter