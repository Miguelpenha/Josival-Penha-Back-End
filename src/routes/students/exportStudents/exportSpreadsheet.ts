import { Workbook } from 'exceljs'
import { Response } from 'express'
import path from 'path'
import fs from 'fs'

async function exportSpreadsheet(spreadsheet: Workbook, res: Response) {
    const pathSpreadsheet = path.resolve(__dirname, '..', '..', '..', '..', 'public', 'spreadsheets', 'Planilha de alunos.xlsx')

    await spreadsheet.xlsx.writeFile(pathSpreadsheet)

    const statSpreadsheet = fs.statSync(pathSpreadsheet)

    res.setHeader('Content-Description', 'File Transfer')
    res.setHeader('Content-Disposition', 'attachment; filename=Planilha de alunos.xlsx')
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.setHeader('Content-Length', statSpreadsheet.size)
    res.setHeader('Content-Transfer-Encoding', 'binary')
    res.setHeader('Cache-Control', 'must-revalidate')
    res.setHeader('Pragma', 'public')
    
    res.download(pathSpreadsheet, 'Planilha de alunos.xlsx', () => fs.unlinkSync(pathSpreadsheet))
}

export default exportSpreadsheet