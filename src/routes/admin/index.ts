import express from 'express'
import loginAdmin from './loginAdmin'
import verifyLoginAdmin from './verifyLoginAdmin'

const adminRouter = express.Router()

adminRouter.post('/login/:type', loginAdmin)
adminRouter.post('/verify', verifyLoginAdmin)

export default adminRouter