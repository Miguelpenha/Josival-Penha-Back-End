import express from 'express'
import whatsapp from './whatsapp'

const notifyRouter = express.Router()

notifyRouter.post('/whatsapp/:to', whatsapp)

export default notifyRouter