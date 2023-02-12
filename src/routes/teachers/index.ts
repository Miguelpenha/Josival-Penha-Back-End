import express from 'express'
import teachers from './teachers'
import teacher from './teacher'
import authRouter from './auth'
import createTeacher from './createTeacher'
import editTeacher from './editTeacher'
import deleteTeacher from './deleteTeacher'

const teachersRouter = express.Router()

teachersRouter.get('/', teachers)
teachersRouter.get('/:id', teacher)
teachersRouter.use('/auth', authRouter)
teachersRouter.post('/', createTeacher)
teachersRouter.patch('/:id', editTeacher)
teachersRouter.delete('/:id', deleteTeacher)

export default teachersRouter