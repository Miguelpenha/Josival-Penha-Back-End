import express from 'express'
import teachers from './teachers'
import teacher from './teacher'
import createTeacher from './createTeacher'
import editTeacher from './editTeacher'
import deleteTeacher from './deleteTeacher'
import loginTeacher from './loginTeacher'

const teachersRouter = express.Router()

teachersRouter.get('/', teachers)
teachersRouter.get('/:id', teacher)
teachersRouter.post('/', createTeacher)
teachersRouter.patch('/:id', editTeacher)
teachersRouter.delete('/:id', deleteTeacher)
teachersRouter.post('/login/:id', loginTeacher)

export default teachersRouter