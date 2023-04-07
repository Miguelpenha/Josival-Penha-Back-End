import express from 'express'
import students from './students'
import student from './student'
import createStudent from './createStudent'
import editStudent from './editStudent'
import deleteStudent from './deleteStudent'
import studentsDocumentsRouter from './documents'

const studentsRouter = express.Router()

studentsRouter.get('/', students)
studentsRouter.get('/:id', student)
studentsRouter.post('/', createStudent)
studentsRouter.patch('/:id', editStudent)
studentsRouter.delete('/:id', deleteStudent)
studentsRouter.use('/documents', studentsDocumentsRouter)

export default studentsRouter