import { Request, Response } from 'express'
import makeSpreadsheets from './makeSpreadsheets'
import generateSpreadsheetService from '../../services/generateSpreadsheetService'

interface IExportRouterParams {
    filters: string
}

async function exportRouter(req: Request<IExportRouterParams>, res: Response) {
    const { filters } = req.params
    const { names, datas, values, namesFile } = await makeSpreadsheets(filters ? filters.split(',') : [])

    await generateSpreadsheetService(names, datas, values, res, filters.split(',').length === 1 ? namesFile[0] : 'Planilha geral')
}

export default exportRouter