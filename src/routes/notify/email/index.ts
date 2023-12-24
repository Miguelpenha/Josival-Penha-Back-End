import express from 'express'
import send from './send'
import preview from './preview'

const notifyEmailRouter = express.Router()

notifyEmailRouter.post('/send/:to', send)
notifyEmailRouter.post('/preview', preview)

export default notifyEmailRouter