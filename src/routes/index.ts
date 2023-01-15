import express from 'express'
import middlewareAuth from '../utils/middlewareAuth'
import classesRouter from './classes'
import teachersRouter from './teachers'
import studentsRouter from './students'
import login from './login'

const router = express.Router()

router.use(middlewareAuth)
router.use('/classes', classesRouter)
router.use('/teachers', teachersRouter)
router.use('/students', studentsRouter)
router.use('/login', login)

export default router