import express from 'express'
import declarationFrequency from './declarationFrequency'
import declarationFinancial from './declarationFinancial'

const studentsDocumentsDeclarationsRouter = express.Router()

studentsDocumentsDeclarationsRouter.get('/frequency/:id', declarationFrequency)
studentsDocumentsDeclarationsRouter.get('/financial/:id', declarationFinancial)

export default studentsDocumentsDeclarationsRouter