import { Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IVerifyLoginAdminBody {
    token: string
}

async function verifyLoginAdmin(req: Request<{}, {}, IVerifyLoginAdminBody>, res: Response) {
    const { token } = req.body

    try {
        verify(token, process.env.SECRET_JWT)

        res.json({ verified: true })
    } catch {
        res.json({ verified: false })
    }
}

export default verifyLoginAdmin