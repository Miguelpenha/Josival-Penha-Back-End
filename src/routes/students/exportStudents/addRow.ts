import { IStudent } from '../../../types'
import { Worksheet } from 'exceljs'

function addRow(sheet: Worksheet, student: IStudent) {
    sheet.addRow([
        student.name || '',
        student.created && student.created.date || '',
        student.birth || '',
        student.situation || '',
        student.telephone || '',
        student.email || '',
        student.responsible1 || '',
        student.responsible2 || '',
        student.gender || '',
        student.address && student.address.city || '',
        student.address && student.address.street || '',
        student.address && student.address.number || '',
        student.address && student.address.neighborhood || '',
        student.class && student.class.name || '',
        student.class && student.class.grade || '',
        student.class && student.class.shift || ''
    ])
}

export default addRow