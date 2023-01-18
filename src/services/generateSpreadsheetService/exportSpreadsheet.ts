import { Workbook } from 'exceljs'
import { Response } from 'express'
import path from 'path'
import fs from 'fs'

async function exportSpreadsheet(name: string, spreadsheet: Workbook, res: Response) {
    const pathSpreadsheet = path.resolve(__dirname, '..', '..', '..', 'public', 'spreadsheets', `${name}.xlsx`)

    await spreadsheet.xlsx.writeFile(pathSpreadsheet)

    const statSpreadsheet = fs.statSync(pathSpreadsheet)

    res.setHeader('Content-Description', 'File Transfer')
    res.setHeader('Content-Disposition', `attachment; filename=${name}.xlsx`)
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.setHeader('Content-Length', statSpreadsheet.size)
    res.setHeader('Content-Transfer-Encoding', 'binary')
    res.setHeader('Cache-Control', 'must-revalidate')
    res.setHeader('Pragma', 'public')
    
    res.download(pathSpreadsheet, `${name}.xlsx`, () => fs.unlinkSync(pathSpreadsheet))
}

export default exportSpreadsheet