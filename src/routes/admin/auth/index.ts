import express from 'express'
import loginAdmin from './loginAdmin'
import verifyLoginAdmin from './verifyLoginAdmin'

const authRouter = express.Router()

authRouter.post('/login/:type', loginAdmin)
authRouter.post('/verify', verifyLoginAdmin)

export default authRouter