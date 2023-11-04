import { ISpreadsheet } from './type'
import datasTeacher from './datas/datasTeacher'
import teachersModel from '../../models/teacher'
import datasClass from './datas/datasClass'
import classesModel from '../../models/class'
import datasStudent from './datas/datasStudent'
import studentsModel from '../../models/student'
import datasIncome from './datas/datasIncome'
import incomesModel from '../../models/income'

async function makeSpreadsheets(filters: string[]) {
    const spreadsheetsRaw: ISpreadsheet[] = [
        {
            name: 'Professoras',
            data: datasTeacher,
            value: await teachersModel.find(),
            nameFile: 'Planilha de professoras'
        },
        {
            name: 'Turmas',
            data: datasClass,
            nameFile: 'Planilha de turmas',
            value: await classesModel.find().populate('teacher')
        },
        {
            name: 'Alunos',
            data: datasStudent,
            nameFile: 'Planilha de alunos',
            value: await studentsModel.find().populate(['class', 'teacher']).select(['+address'])
        }
        ,
        {
            name: 'Receitas',
            data: datasIncome,
            nameFile: 'Planilha de receitas',
            value: await incomesModel.find().populate('student')
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
        values: spreadsheets.map(spreadsheet => spreadsheet.value),
        namesFile: spreadsheets.map(spreadsheet => spreadsheet.nameFile)
    }
}

export default makeSpreadsheets