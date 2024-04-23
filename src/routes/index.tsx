import express from 'express'
import middlewareAuth from '../utils/middlewareAuth'
import adminRouter from './admin'
import videoRouter from './video'
import notifyRouter from './notify'
import classesRouter from './classes'
import incomesRouter from './incomes'
import teachersRouter from './teachers'
import studentsRouter from './students'
import exportRouter from './export'
import dashboardRouter from './dashboard'

const router = express.Router()

router.use(middlewareAuth)

router.use('/admin', adminRouter)
router.use('/video', videoRouter)
router.use('/notify', notifyRouter)
router.use('/classes', classesRouter)
router.use('/incomes', incomesRouter)
router.use('/teachers', teachersRouter)
router.use('/students', studentsRouter)
router.get('/export/:filters', exportRouter)

router.post('/whatsapp', (req, res) => {
    res.send(req.body)
})

export default router