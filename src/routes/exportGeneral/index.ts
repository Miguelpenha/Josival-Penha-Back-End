import { Request, Response } from 'express'
import makeSpreadsheets from './makeSpreadsheets'
import generateSpreadsheetService from '../../services/generateSpreadsheetService'

interface IExportGeneralParams {
    filters: string
}

async function exportGeneral(req: Request<IExportGeneralParams>, res: Response) {
    const { filters } = req.params
    const { names, datas, values, namesFile } = await makeSpreadsheets(filters ? filters.split(',') : [])

    await generateSpreadsheetService(names, datas, values, res, filters.split(',').length === 1 ? namesFile[0] : 'Planilha geral')
}

export default exportGeneral