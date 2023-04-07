import { GoogleSpreadsheet } from 'google-spreadsheet'
import { IData } from '../../services/generateSpreadsheetService/type'

async function makeSheet(doc: GoogleSpreadsheet, name: string, values: object[], datas: IData[]) {
    const sheet = doc.sheetsByTitle[name]

    await sheet.clearRows()

    await sheet.addRows(values.map(value => {
        let row = {}

        datas.map(data => row[data.name] = data.row(value) || '')

        return row
    }))
}

export default makeSheet