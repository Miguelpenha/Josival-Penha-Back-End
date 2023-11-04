import express from 'express'
import middlewareAuth from '../utils/middlewareAuth'
import adminRouter from './admin'
import notifyRouter from './notify'
import classesRouter from './classes'
import incomesRouter from './incomes'
import teachersRouter from './teachers'
import studentsRouter from './students'
import exportGeneral from './export'

const router = express.Router()

router.use(middlewareAuth)

router.use('/admin', adminRouter)
router.use('/notify', notifyRouter)
router.use('/classes', classesRouter)
router.use('/incomes', incomesRouter)
router.use('/teachers', teachersRouter)
router.use('/students', studentsRouter)
router.get('/export/:filters', exportGeneral)

router.get('/check', (req, res) => (
    res.json({ ok: true })
))

export default router