import express from 'express'
import declaration from './declaration'

const studentsDocumentsRouter = express.Router()

studentsDocumentsRouter.get('/declaration/:id', declaration)

export default studentsDocumentsRouter