import { Request, Response } from 'express'
import { Resend } from 'resend'
import { render } from '@react-email/render'
import React from 'react'
import Template from '../../emails/Template'

interface IWhatsappParams {
    to: string
}

interface IWhatsappBody {
    text: string
    title: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

async function email(req: Request<IWhatsappParams, {}, IWhatsappBody>, res: Response) {
    const { to } = req.params

    if (to) {
        const { title, text } = req.body

        try {
            const { id } = await resend.emails.send({
                to,
                subject: title,
                from: 'secretaria@josivalpenha.com',
                react: <Template text={text} title={title}/>
            })

            res.json({ id, send: true })
        } catch (error) {
            console.log(error)

            res.json({ send: false })
        }
    } else {
        res.json({ message: 'Param "to" is required' })
    }
}

export default email