import express from 'express'
import teachers from './teachers'
import exportTeachers from './exportTeachers'
import teacher from './teacher'
import createTeacher from './createTeacher'
import editTeacher from './editTeacher'
import loginTeacher from './loginTeacher'
import deleteTeacher from './deleteTeacher'

const teachersRouter = express.Router()

teachersRouter.get('/', teachers)
teachersRouter.get('/export', exportTeachers)
teachersRouter.get('/:id', teacher)
teachersRouter.post('/', createTeacher)
teachersRouter.patch('/:id', editTeacher)
teachersRouter.delete('/:id', deleteTeacher)
teachersRouter.post('/login/:type', loginTeacher)

export default teachersRouter