import { IData } from './type'
import { Response } from 'express'
import ExcelJS from 'exceljs'
import makeSheet from './makeSheet'
import exportSpreadsheet from './exportSpreadsheet'

async function generateSpreadsheetService(name: string | string[], datas: IData[] | (IData[])[], values: object[] | (object[])[], res: Response, nameFile?: string) {
    const spreadsheet = new ExcelJS.Workbook()

    if (typeof name === 'string') {
        await makeSheet(spreadsheet, name, (datas as IData[]), values)

        await exportSpreadsheet(nameFile || name, spreadsheet, res)
    } else {
        name.map(async (name, index) => (
            await makeSheet(spreadsheet, name, (datas as (IData[])[])[index], (values as (object[])[])[index])
        ))

        await exportSpreadsheet(nameFile, spreadsheet, res)
    }
}

export default generateSpreadsheetService