import express, { Request } from 'express'
import videoRouter from './video'
import { S3Client } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import multer from 'multer'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
import ICompany from '../../types/company'
import companiesModel from '../../models/company'
import { v4 as uuidv4 } from 'uuid'
import intoStream from 'into-stream'
import { PassThrough } from 'stream'

const nyxelRouter = express.Router()

nyxelRouter.use('/video', videoRouter)

const client = new S3Client({
    region: 'sa-east-1',
    requestChecksumCalculation: 'WHEN_REQUIRED'
})

const upload = multer({ storage: multer.memoryStorage() })

ffmpeg.setFfmpegPath(ffmpegInstaller.path)

type IRequestRegisterCompany = Omit<ICompany, '_id' | 'routes' | 'created'>

nyxelRouter.post('/companies', async (req: Request<{}, {}, IRequestRegisterCompany>, res) => {
    const company = req.body

    const folderName = `${company.name}-${uuidv4()}`

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

nyxelRouter.get('/companies/:IDCompany', async (req, res) => {
    const { IDCompany } = req.params
    const company = await companiesModel.findOne({ _id: IDCompany })

    res.json(company)
})

nyxelRouter.post('/companies/:IDCompany/route', upload.single('video'), async (req: Request<{ IDCompany: string }, {}, { url: string }>, res) => {
    const { IDCompany } = req.params
    const { url } = req.body

    const company = await companiesModel.findOne({ _id: IDCompany })

    const videoName = `video-${uuidv4()}`
    const key = `videos/${company.folderURL}/${videoName}`

    company.routes.push({ url, videoURL: videoName, loading: true } as any)

    await company.save()

    res.json({ created: true })

    const pass = new PassThrough()
    const uploadTask = new Upload({
        client,
        params: {
            Key: key,
            Body: pass,
            Bucket: 'nyxel',
            ACL: 'public-read',
            ContentType: req.file.mimetype,
        }
    })

    ffmpeg(intoStream(req.file.buffer))
        .outputOptions([
            '-c copy',
            '-map 0',
            '-movflags',
            '+frag_keyframe+empty_moov+default_base_moof+faststart'
        ])
        .format('mp4')
        .on('error', err => {
            console.log(err)
            pass.destroy(err)
        })
        .pipe(pass)

    uploadTask.done().then(() => {
        company.routes.map((route, index) => {
            if (route.url === url) {
                company.routes[index].loading = false
            }
        })
    
        company.save().then()
    })
})

export default nyxelRouter