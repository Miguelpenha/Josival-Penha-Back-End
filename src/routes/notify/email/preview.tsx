import { Request, Response } from 'express'
import { render } from '@react-email/render'
import React from 'react'
import Template from '../../../emails/Template'

interface IPreviewBody {
    text: string
    title: string
    action: {
        text: string
        link: string
    }
}

async function preview(req: Request<{}, {}, IPreviewBody>, res: Response) {
    const { title, text, action } = req.body

    const html = render(
        <Template
            text={text}
            title={title}
            action={action}
        />
    )
    
    res.send(html)
}

export default preview