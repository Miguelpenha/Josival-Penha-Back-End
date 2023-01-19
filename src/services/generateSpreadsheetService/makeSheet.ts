import { Workbook } from 'exceljs'
import { IData } from './type'

async function makeSheet(spreadsheet: Workbook, name: string, datas: IData[], values: object[]) {
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
}

export default makeSheet