import { Request, Response } from 'express'
import teachersModel from '../../../models/teacher'
import generateSpreadsheetService from '../../../services/generateSpreadsheetService'
import datas from './datas'

async function exportTeachers(req: Request, res: Response) {
    const teachers = await teachersModel.find()

    await generateSpreadsheetService('Planilha de professoras', datas, teachers, res)
}

export default exportTeachers