import express from 'express'
import declarations from './declarations'

const studentsDocumentsRouter = express.Router()

studentsDocumentsRouter.use('/declarations', declarations)

export default studentsDocumentsRouter