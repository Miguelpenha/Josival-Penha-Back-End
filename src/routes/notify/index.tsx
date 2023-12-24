import express from 'express'
import email from './email'
import whatsapp from './whatsapp'

const notifyRouter = express.Router()

notifyRouter.use('/email', email)
notifyRouter.post('/whatsapp/:to', whatsapp)

export default notifyRouter