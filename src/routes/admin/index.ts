import express from 'express'
import loginAdmin from './loginAdmin'

const adminRouter = express.Router()

adminRouter.post('/login/:type', loginAdmin)

export default adminRouter