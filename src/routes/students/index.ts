import express from 'express'
import students from './students'
import student from './student'
import createStudent from './createStudent'
import editStudent from './editStudent'
import deleteStudent from './deleteStudent'
import exportStudents from './exportStudents'
import studentsDocumentsRouter from './documents'

const studentsRouter = express.Router()

studentsRouter.get('/', students)
studentsRouter.get('/:id', student)
studentsRouter.post('/', createStudent)
studentsRouter.patch('/:id', editStudent)
studentsRouter.delete('/:id', deleteStudent)
studentsRouter.post('/export', exportStudents)
studentsRouter.use('/documents', studentsDocumentsRouter)

export default studentsRouter