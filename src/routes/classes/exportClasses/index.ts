import { Request, Response } from 'express'
import classesModel from '../../../models/class'
import generateSpreadsheetService from '../../../services/generateSpreadsheetService'
import datas from './datas'

async function exportClasses(req: Request, res: Response) {
    const classes = await classesModel.find().populate('teacher')

    await generateSpreadsheetService('Planilha de turmas', datas, classes, res)
}

export default exportClasses