import mongoose from 'mongoose'
import { IClass } from '../types'
import createdSchema from './schemasPatterns/created'
import studentsModel from './student'

const schema = new mongoose.Schema<IClass>({
    name: String,
    grade: String,
    shift: String,
    created: createdSchema,
    teacher: {
        type: String,
        select: false,
        ref: 'teachers'
    }
})

schema.post('deleteOne', async classDeleted => {
    const studentsDelete = await studentsModel.find({ class: classDeleted._id }).select('+id')

    studentsDelete.map(async student => (
        await student.deleteOne()
    ))
})

const classesModel = mongoose.model('classes', schema)

export default classesModel