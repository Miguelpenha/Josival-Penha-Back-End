import { Request, Response } from 'express'
import mongoose from 'mongoose'
import classesModel from '../../models/class'
import { manageSpreadsheetJob } from '../../jobs'

interface IDeleteClassParams {
    id: string
}

async function deleteClass(req: Request<IDeleteClassParams>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const classIsExists = await classesModel.findById(id).select('+id')

        if (classIsExists) {
            await classIsExists.remove()

            res.json({ deleted: true })

            await manageSpreadsheetJob()
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default deleteClass