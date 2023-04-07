import express from 'express'
import authRouter from './auth'

const adminRouter = express.Router()

adminRouter.use('/auth', authRouter)

adminRouter.get('/:index', async (req, res) => {
    const { index } = req.params

    if (index) {
        const logins = process.env.ADMIN_LOGIN.split(',')

        res.json({ login: logins[index] })
    }
})

export default adminRouter