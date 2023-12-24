import { Request, Response } from 'express'
import makeSpreadsheets from './makeSpreadsheets'
import generateSpreadsheetService from '../../services/generateSpreadsheetService'
import verifyFilters from './verifyFilters'

interface IExportRouterParams {
    filters: string
}

async function exportRouter(req: Request<IExportRouterParams>, res: Response) {
    const { filters } = req.params
    const { names, datas, values, namesFile } = await makeSpreadsheets(filters ? filters.split(',') : [])
    const filtersVerified = verifyFilters(filters)

    if (filtersVerified.correct) {
        await generateSpreadsheetService(
            names,
            datas,
            values,
            res,
            filters.split(',').length === 1 ? namesFile[0] : 'Planilha geral'
        )
    } else {
        res.status(400).json({
            message: 'Some of these filters do not exist',
            filtersIncorrect: filtersVerified.filtersIncorrect
        })
    }
}

export default exportRouter