import { Request, Response } from 'express'
import studentsModel from '../../models/student'

interface IStudentsQuery {
    count: (string | undefined)
    class: (string | undefined)
    address: (string | undefined)
    matters: (string | undefined)
}

async function students(req: Request<{}, {}, {}, IStudentsQuery>, res: Response) {
    const { count, class: classSelect, address, matters } = req.query

    if (count !== 'false' && count) {
        const studentsCount = await studentsModel.estimatedDocumentCount()

        res.json({ count: studentsCount })
    } else {
        const students = studentsModel.find()

        if (classSelect !== 'false' && classSelect) {
            students.populate('class')
        }

        const select: string[] = []

        if (address !== 'false' && address) {
            select.push('+address')
        }

        if (matters !== 'false' && matters) {
            select.push('+matters')
        }

        students.select(select)

        res.json(await students)
    }
}

export default students