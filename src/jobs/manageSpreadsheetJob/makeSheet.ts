import { GoogleSpreadsheet } from 'google-spreadsheet'
import { IData } from '../../services/generateSpreadsheetService/type'

async function makeSheet(doc: GoogleSpreadsheet, name: string, values: object[], datas: IData[]) {
    let sheet = doc.sheetsByTitle[name]

    if (!sheet) {
        sheet = await doc.addSheet({
            title: name
        })
    }

    if (!sheet.headerValues || sheet.headerValues.length != datas.length) {
        sheet.setHeaderRow(datas.map(data => data.name))
    }

    await sheet.clearRows()

    await sheet.addRows(values.map(value => {
        let row = {}

        datas.map(data => row[data.name] = data.row(value) || '')

        return row
    }))
}

export default makeSheet