import mongoose from 'mongoose'
import IMatters, { IMatter } from '../../../types/student/matters'

const unitSchema = {
    type: Number,
    default: null
}

const matterSchema = new mongoose.Schema<IMatter>({
    first: unitSchema,
    third: unitSchema,
    fourth: unitSchema,
    second: unitSchema
})

const matters = new mongoose.Schema<IMatters>({
    math: matterSchema,
    arts: matterSchema,
    history: matterSchema,
    english: matterSchema,
    science: matterSchema,
    religion: matterSchema,
    geography: matterSchema,
    portuguese: matterSchema,
    physicalEducation: matterSchema
})

export default matters