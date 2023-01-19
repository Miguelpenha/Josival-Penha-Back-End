import { Request, Response } from 'express'
import makeSpreadsheets from './makeSpreadsheets'
import generateSpreadsheetService from '../../services/generateSpreadsheetService'

interface IExportGeneralQuery {
    filters: string
}

async function exportGeneral(req: Request<{}, {}, {}, IExportGeneralQuery>, res: Response) {
    const { filters } = req.query
    const { names, datas, values } = await makeSpreadsheets(filters ? filters.split(',') : [])

    await generateSpreadsheetService(names, datas, values, res, 'Planilha geral')
}

export default exportGeneral