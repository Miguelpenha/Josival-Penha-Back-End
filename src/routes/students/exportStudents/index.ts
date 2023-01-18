import { Request, Response } from 'express'
import studentsModel from '../../../models/student'
import ExcelJS from 'exceljs'
import columns from './columns'
import keysColumns from './keysColumns'
import addRow from './addRow'
import exportSpreadsheet from './exportSpreadsheet'

async function exportStudents(req: Request, res: Response) {
    const spreadsheet = new ExcelJS.Workbook()
    const sheet = spreadsheet.addWorksheet('Planilha de alunos')

    const students = await studentsModel.find().populate('class').select(['+address'])

    sheet.columns = columns.map(column => ({
        header: column,
        width: column.length+2
    }))

    keysColumns.map(key => 
        sheet.getCell(key).font = {
            bold: true
        }
    )

    students.map(student => addRow(sheet, student))
    
    await exportSpreadsheet(spreadsheet, res)
}

export default exportStudents