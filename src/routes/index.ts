import express from 'express'
import middlewareAuth from '../utils/middlewareAuth'
import adminRouter from './admin'
import classesRouter from './classes'
import financeRouter from './finance'
import teachersRouter from './teachers'
import studentsRouter from './students'
import exportGeneral from './export'

const router = express.Router()

router.use(middlewareAuth)

router.use('/admin', adminRouter)
router.use('/classes', classesRouter)
router.use('/finance', financeRouter)
router.use('/teachers', teachersRouter)
router.use('/students', studentsRouter)
router.get('/export/:filters', exportGeneral)

export default router