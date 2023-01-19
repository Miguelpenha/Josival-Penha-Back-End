import express from 'express'
import middlewareAuth from '../utils/middlewareAuth'
import login from './login'
import adminRouter from './admin'
import exportGeneral from './exportGeneral'
import classesRouter from './classes'
import teachersRouter from './teachers'
import studentsRouter from './students'

const router = express.Router()

router.use(middlewareAuth)

router.use('/login', login)
router.use('/admin', adminRouter)
router.use('/export', exportGeneral)
router.use('/classes', classesRouter)
router.use('/teachers', teachersRouter)
router.use('/students', studentsRouter)

export default router