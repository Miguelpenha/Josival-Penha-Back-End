import { Request, Response } from 'express'

interface ILoginTeacherBody {
    login: string
    password: string
}

async function login(req: Request<{}, {}, ILoginTeacherBody>, res: Response) {
    const { login, password } = req.body
    
    if (login === process.env.ADMIN_LOGIN) {
        if (password === process.env.ADMIN_PASSWORD) {
            res.json({ authenticated: true })
        } else {
            res.json({ authenticated: false })
        }
    } else {
        res.json({ authenticated: false })
    }
}

export default login