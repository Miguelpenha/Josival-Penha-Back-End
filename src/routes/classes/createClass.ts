import { Request, Response } from 'express'
import classesModel from '../../models/class'
import { manageSpreadsheetJob } from '../../jobs'

interface ICreateClassBody {
    name: string
    grade: string
    shift: string
    teacher: string
}

async function createClass(req: Request<{}, {}, ICreateClassBody>, res: Response) {
    let { name, grade, shift, teacher } = req.body

    const classIsExists = await classesModel.findOne({ name })
    
    if (!classIsExists) {
        await classesModel.create({
            name,
            grade,
            shift,
            teacher
        })
        
        res.json({ created: true })

        await manageSpreadsheetJob()
    } else {
        res.json({ exists: true })
    }
}

export default createClass