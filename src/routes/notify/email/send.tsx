import { Request, Response } from 'express'
import { Resend } from 'resend'
import React from 'react'
import Template from '../../../emails/Template'

interface ISendParams {
    to: string
}

interface ISendBody {
    text: string
    title: string
    action: {
        text: string
        link: string
    }
}

const resend = new Resend(process.env.RESEND_API_KEY)

async function send(req: Request<ISendParams, {}, ISendBody>, res: Response) {
    const { to } = req.params

    if (to) {
        const { title, text, action } = req.body

        try {
            const { id } = await resend.emails.send({
                to,
                subject: title,
                from: process.env.EMAIL_FROM,
                react: <Template
                            text={text}
                            title={title}
                            action={{ link: action.link, text: action.text }}
                        />
            })

            if (id) {
                res.json({ id, send: true })
            } else {
                res.json({ send: false })
            }
        } catch (error) {
            console.log(error)

            res.json({ send: false })
        }
    } else {
        res.json({ message: 'Param "to" is required' })
    }
}

export default send