import express from 'express'
import middlewareAuth from '../utils/middlewareAuth'
import adminRouter from './admin'
import nyxelRouter from './nyxel'
import { kommoRouter, RDStationRouter } from './tracker'
import notifyRouter from './notify'
import classesRouter from './classes'
import incomesRouter from './incomes'
import teachersRouter from './teachers'
import studentsRouter from './students'
import questionsRouter from './questions'
import exportRouter from './export'

const router = express.Router()

router.use(middlewareAuth)

router.use('/admin', adminRouter)
router.use('/nyxel', nyxelRouter)
router.use('/kommo', kommoRouter)
router.use('/notify', notifyRouter)
router.use('/classes', classesRouter)
router.use('/incomes', incomesRouter)
router.use('/teachers', teachersRouter)
router.use('/students', studentsRouter)
router.post('/questions', questionsRouter)
router.get('/export/:filters', exportRouter)
router.use('/rdstation', RDStationRouter)

export default router