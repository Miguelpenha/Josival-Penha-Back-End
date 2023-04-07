import { IData } from './type'
import { Response } from 'express'
import ExcelJS from 'exceljs'
import makeSheet from './makeSheet'
import exportSpreadsheet from './exportSpreadsheet'

async function generateSpreadsheetService(name: string[], datas: (IData[])[], values: (object[])[], res: Response, nameFile?: string) {
    const spreadsheet = new ExcelJS.Workbook()

    name.map(async (name, index) => (
        await makeSheet(spreadsheet, name, datas[index], values[index])
    ))

    await exportSpreadsheet(nameFile, spreadsheet, res)
}

export default generateSpreadsheetService