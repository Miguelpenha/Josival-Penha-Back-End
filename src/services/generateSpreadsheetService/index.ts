import { Response } from 'express'
import ExcelJS from 'exceljs'
import exportSpreadsheet from './exportSpreadsheet'

export interface IData<RowDataType=object> {
    name: string
    row: (data: RowDataType) => any
}

async function generateSpreadsheetService(name: string, datas: IData[], values: object[], res: Response) {
    const spreadsheet = new ExcelJS.Workbook()
    const sheet = spreadsheet.addWorksheet(name)

    sheet.columns = datas.map((data, index) => {
        const column = sheet.getColumn(index+1)

        sheet.getCell(`${column.letter}1`).font = {
            bold: true
        }

        return ({
            header: data.name,
            width: data.name.length+2
        })
    })

    values.map(value => {
        sheet.addRow(
            datas.map(data => 
                data.row(value) || ''
            )
        )
    })
    
    await exportSpreadsheet(name, spreadsheet, res)
}

export default generateSpreadsheetService