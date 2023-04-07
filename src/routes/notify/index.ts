import express from 'express'
import reportCard from './reportCard'

const notifyRouter = express.Router()

notifyRouter.get('/report-card/:to', reportCard)

export default notifyRouter