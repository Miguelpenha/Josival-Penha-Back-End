import { Request, Response } from 'express'
import axios from 'axios'
import { decode, sign } from 'jsonwebtoken'

interface ILoginTeacherParams {
    type: 'local' | 'google'
}

interface ILoginTeacherBody {
    jwt?: string
    login: string
    password?: string
    accessToken?: string
}

async function loginAdmin(req: Request<ILoginTeacherParams, {}, ILoginTeacherBody>, res: Response) {
    const { type } = req.params
    const { login, password, accessToken, jwt } = req.body

    if (type === 'google') {
        try {
            let user = null

            if (accessToken) {
                user = (await axios.get('https://www.googleapis.com/userinfo/v2/me', {
                    headers: {
                        authorization: `Bearer ${accessToken}`
                    }
                })).data
            } else if (jwt) {
                user = decode(jwt)
            }

            if ((user.email_verified || user.verified_email) && user.hd === process.env.DOMAIN_EMAIL) {
                if (process.env.ADMIN_LOGIN.includes(user.email)) {
                    const token = sign({}, process.env.SECRET_JWT, {
                        subject: 'admin',
                        expiresIn: '20s'
                    })

                    const logins = process.env.ADMIN_LOGIN.split(',')

                    logins.map((login, index) => {
                        if (login === user.email) {
                            res.json({ authenticated: true, token, id: index })
                        }
                    })
                } else {
                    res.json({ authenticated: false })
                }
            } else {
                res.json({ authenticated: false })
            }
        } catch {
            res.json({ authenticated: false })
        }
    } else if (type === 'local') {
        const logins = process.env.ADMIN_LOGIN.split(',')
        const passwords = process.env.ADMIN_PASSWORD.split(',')

        logins.map((loginAdmin, index) => {
            if (login === loginAdmin && password === passwords[index]) {
                const token = sign({}, process.env.SECRET_JWT, {
                    subject: 'admin',
                    expiresIn: '20s'
                })
    
                res.json({ authenticated: true, token, id: index })
            }
        })
    } else {
        res.json({ typeNotExists: true })
    }
}

export default loginAdmin