import { Request, Response } from 'express'
import mongoose from 'mongoose'
import classesModel from '../../models/class'

interface IClassParams {
    id: string
}

interface IClassQuery {
    teacher: (string | undefined)
}

async function getClass(req: Request<IClassParams, {}, {}, IClassQuery>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const classSelect = classesModel.findById(id)
        const selects: string[] = []
        const { teacher } = req.query

        if (teacher !== 'false' && teacher) {
            selects.push('+teacher')
        }

        selects.length > 0 && classSelect.select(selects)

        const classIsExist= await classSelect

        if (classIsExist) {
            res.json(classIsExist)
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default getClass