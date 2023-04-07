import mongoose from 'mongoose'
import { IStudent } from '../../types'
import createdSchema from '../schemasPatterns/created'
import address from './schemas/address'
import matters from './schemas/matters'
import encrypt from '../../utils/cryptography/encrypt'
import decrypt from '../../utils/cryptography/decrypt'

const schema = new mongoose.Schema<IStudent>({
    name: String,
    birth: String,
    email: String,
    gender: String,
    situation: String,
    telephone: String,
    responsible1: String,
    responsible2: String,
    created: createdSchema,
    address: {
        type: address,
        select: false
    },
    matters: {
        type: matters,
        select: false
    },
    class: {
        type: String,
        select: false,
        ref: 'classes'
    },
    teacher: {
        type: String,
        select: false,
        ref: 'teachers'
    },
    cpf: {
        type: String,
        set: encrypt,
        get: decrypt,
        select: false
    }
})

const studentsModel = mongoose.model('students', schema)

export default studentsModel