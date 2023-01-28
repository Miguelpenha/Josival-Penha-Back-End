import { Workbook } from 'exceljs'
import { Response } from 'express'

async function exportSpreadsheet(name: string, spreadsheet: Workbook, res: Response) {
    res.setHeader('Content-Description', 'File Transfer')
    res.setHeader('Content-Disposition', `attachment; filename=${name}.xlsx`)
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.setHeader('Content-Transfer-Encoding', 'binary')
    res.setHeader('Cache-Control', 'must-revalidate')
    res.setHeader('Pragma', 'public')

    await spreadsheet.xlsx.write(res)
}

export default exportSpreadsheet