import express from 'express'
import declarationFrequency from './declarationFrequency'
import declarationFinancial from './declarationFinancial'
import declarationProvisionalTransfer from './declarationProvisionalTransfer'

const studentsDocumentsDeclarationsRouter = express.Router()

studentsDocumentsDeclarationsRouter.get('/frequency/:id', declarationFrequency)
studentsDocumentsDeclarationsRouter.get('/financial/:id', declarationFinancial)
studentsDocumentsDeclarationsRouter.get('/provisional-transfer/:id', declarationProvisionalTransfer)

export default studentsDocumentsDeclarationsRouter