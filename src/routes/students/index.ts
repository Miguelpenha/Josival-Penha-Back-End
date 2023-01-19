import express from 'express'
import students from './students'
import exportStudents from './exportStudents'
import student from './student'
import createStudent from './createStudent'
import editStudent from './editStudent'
import deleteStudent from './deleteStudent'
import studentsDocumentsRouter from './documents'

import teachersModel from '../../models/teacher'
import studentsModel from '../../models/student'
import classesModel from '../../models/class'

const studentsRouter = express.Router()

studentsRouter.get('/asd', async (req, res) => {
    const students = await studentsModel.find().populate('class')
    const classes = await classesModel.find()
    const teachers = await teachersModel.find()

    students.map((student, index) => {
        classes.map(async classMap => {
            if (classMap.id === student.class.id) {
                student.teacher = classMap.teacher
                
                await student.save()
            }
        })
    })

    res.json(students)
})

studentsRouter.get('/', students)
studentsRouter.get('/export', exportStudents)
studentsRouter.get('/:id', student)
studentsRouter.post('/', createStudent)
studentsRouter.patch('/:id', editStudent)
studentsRouter.delete('/:id', deleteStudent)
studentsRouter.use('/documents', studentsDocumentsRouter)

export default studentsRouter