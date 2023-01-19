import { Request, Response } from 'express'
import studentsModel from '../../../models/student'
import generateSpreadsheetService from '../../../services/generateSpreadsheetService'
import datas from './datas'

async function exportStudents(req: Request, res: Response) {
    const students = await studentsModel.find().populate(['class', 'teacher']).select(['+address'])

    await generateSpreadsheetService('Planilha de alunos', datas, students, res)
}

export default exportStudents