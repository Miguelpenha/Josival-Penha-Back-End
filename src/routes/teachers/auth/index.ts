import express from 'express'
import loginTeacher from './loginTeacher'
import verifyLoginTeacher from './verifyLoginTeacher'

const authRouter = express.Router()

authRouter.post('/login/:type', loginTeacher)
authRouter.post('/verify', verifyLoginTeacher)

export default authRouter