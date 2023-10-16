import express from 'express'
import declaration from './declaration'
import declarationFinancial from './declarationFinancial'

const studentsDocumentsRouter = express.Router()

studentsDocumentsRouter.get('/declaration/:id', declaration)
studentsDocumentsRouter.get('/declaration-finance/:id', declarationFinancial)

export default studentsDocumentsRouter