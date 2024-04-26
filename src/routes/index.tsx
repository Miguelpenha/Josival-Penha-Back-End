import express from 'express'
import middlewareAuth from '../utils/middlewareAuth'
import adminRouter from './admin'
import notifyRouter from './notify'
import classesRouter from './classes'
import incomesRouter from './incomes'
import teachersRouter from './teachers'
import videoRouter from './video'
import studentsRouter from './students'
import exportRouter from './export'

const router = express.Router()

router.use(middlewareAuth)

router.use('/admin', adminRouter)
router.use('/notify', notifyRouter)
router.use('/classes', classesRouter)
router.use('/incomes', incomesRouter)
router.use('/nyxel/video', videoRouter)
router.use('/teachers', teachersRouter)
router.use('/students', studentsRouter)
router.get('/export/:filters', exportRouter)

router.post('/whatsapp', (req, res) => {
    res.send(req.body)
})

export default router