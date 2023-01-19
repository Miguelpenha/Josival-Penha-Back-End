import { ISpreadsheet } from './type'
import datasTeacher from '../teachers/exportTeachers/datas'
import teachersModel from '../../models/teacher'
import datasClass from '../classes/exportClasses/datas'
import classesModel from '../../models/class'
import datasStudent from '../students/exportStudents/datas'
import studentsModel from '../../models/student'

async function makeSpreadsheets(filters: string[]) {
    const spreadsheetsRaw: ISpreadsheet[] = [
        {
            name: 'Professoras',
            data: datasTeacher,
            value: await teachersModel.find()
        },
        {
            name: 'Turmas',
            data: datasClass,
            value: await classesModel.find().populate('teacher')
        },
        {
            name: 'Alunos',
            data: datasStudent,
            value: await studentsModel.find().populate(['class', 'teacher']).select(['+address'])
        }
    ]

    const spreadsheets: ISpreadsheet[] = []

    spreadsheetsRaw.map(spreadsheetRaw => {
        if (filters.includes(spreadsheetRaw.name)) {
            spreadsheets.push(spreadsheetRaw)
        }
    })

    return {
        names: spreadsheets.map(spreadsheet => spreadsheet.name),
        datas: spreadsheets.map(spreadsheet => spreadsheet.data),
        values: spreadsheets.map(spreadsheet => spreadsheet.value)
    }
}

export default makeSpreadsheets