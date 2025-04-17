import mongoose from 'mongoose'
import ICompany, { IRoute, ICTA } from '../types/company'
import createdSchema from './schemasPatterns/created'

const routeSchema = new mongoose.Schema<IRoute>({
    created: createdSchema,
    url: {
        type: String,
        required: true
    },
    videoURL: {
        type: String,
        required: true
    }
})

const CTASchema = new mongoose.Schema<ICTA>({
    internal: Boolean,
    url: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

const schema = new mongoose.Schema<ICompany>({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    scale: Number,
    hostURL: {
        type: String,
        required: true
    },
    caption: String,
    routes: [routeSchema],
    folderURL: {
        type: String,
        required: true
    },
    actionText: {
        type: String,
        required: true
    },
    created: createdSchema,
    bottom: {
        mobile: Number,
        desktop: Number
    },
    cta: {
        type: CTASchema,
        required: false
    }
})

const companiesModel = mongoose.model('companies', schema)

export default companiesModel