import { Request, Response } from 'express'
import classesModel from '../../models/class'

interface IClassesQuery {
    count: (string | undefined)
    teacher: (string | undefined)
}

async function classes(req: Request<{}, {}, {}, IClassesQuery>, res: Response) {
    const { count, teacher } = req.query

    if (count !== 'false' && count) {
        const classesCount = await classesModel.estimatedDocumentCount()

        res.json({ count: classesCount })
    } else {
        const classes = classesModel.find()

        if (teacher !== 'false' && teacher) {
            classes.populate('teacher')
        }

        res.json(await classes)
    }
}

export default classes