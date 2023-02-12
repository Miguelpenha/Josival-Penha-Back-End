import { Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IVerifyLoginTeacherBody {
    token: string
}

async function verifyLoginTeacher(req: Request<{}, {}, IVerifyLoginTeacherBody>, res: Response) {
    const { token } = req.body

    try {
        verify(token, process.env.SECRET_JWT)

        res.json({ verified: true })
    } catch {
        res.json({ verified: false })
    }
}

export default verifyLoginTeacher