import express from 'express'
import teachers from './teachers'
import teacher from './teacher'
import createTeacher from './createTeacher'
import editTeacher from './editTeacher'
import loginTeacher from './loginTeacher'
import deleteTeacher from './deleteTeacher'

const teachersRouter = express.Router()

teachersRouter.get('/', teachers)
teachersRouter.get('/:id', teacher)
teachersRouter.post('/', createTeacher)
teachersRouter.patch('/:id', editTeacher)
teachersRouter.post('/login', loginTeacher)
teachersRouter.delete('/:id', deleteTeacher)

export default teachersRouter