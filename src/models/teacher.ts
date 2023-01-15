import mongoose from 'mongoose'
import { ITeacher } from '../types'
import createdSchema from './schemasPatterns/created'
import encrypt from '../utils/cryptography/encrypt'
import decrypt from '../utils/cryptography/decrypt'
import classesModel from './class'

const schema = new mongoose.Schema<ITeacher>({
    name: String,
    gender: String,
    created: createdSchema,
    login: {
        type: String,
        set: encrypt,
        get: decrypt,
        select: false
    },
    password: {
        type: String,
        set: encrypt,
        get: decrypt,
        select: false
    }
})

schema.post('remove', async teacher => {
    const classesDelete = await classesModel.find({ teacher: teacher._id }).select('+id')

    classesDelete.map(async classDelete => (
        await classDelete.remove()
    ))
})

const teachersModel = mongoose.model('teachers', schema)

export default teachersModel