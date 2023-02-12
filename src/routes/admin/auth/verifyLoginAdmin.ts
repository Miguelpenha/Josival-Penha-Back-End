import { Request, Response } from 'express'
import { verify, sign } from 'jsonwebtoken'

interface IVerifyLoginAdminBody {
    token: string
}

async function verifyLoginAdmin(req: Request<{}, {}, IVerifyLoginAdminBody>, res: Response) {
    const { token } = req.body

    try {
        verify(token, process.env.SECRET_JWT, (error, data) => {
            if (error) {
                if (error.name !== 'JsonWebTokenError') {
                    if (error.name === 'TokenExpiredError') {
                        const token = sign({}, process.env.SECRET_JWT, {
                            subject: 'admin',
                            expiresIn: '20s'
                        })
    
                        res.json({ verified: true, token })
                    }
                } else {
                    res.json({ verified: false })
                }
            } else {
                if (data.sub === 'admin') {
                    res.json({ verified: true })
                } else {
                    res.json({ verified: false })
                }
            }
        })
    } catch {
        res.json({ verified: false })
    }
}

export default verifyLoginAdmin