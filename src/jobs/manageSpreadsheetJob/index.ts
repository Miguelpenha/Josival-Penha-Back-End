import { GoogleSpreadsheet } from 'google-spreadsheet'
import { blueBright as info } from 'chalk'
import makeSheet from './makeSheet'
import teachersModel from '../../models/teacher'
import datasTeacher from '../../routes/export/datas/datasTeacher'
import classesModel from '../../models/class'
import datasClass from '../../routes/export/datas/datasClass'
import studentsModel from '../../models/student'
import datasStudent from '../../routes/export/datas/datasStudent'
import incomesOrExpensesModel from '../../models/incomeOrExpense'
import datasFinance from '../../routes/export/datas/datasFinance'

async function manageSpreadsheetJob() {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_ID_SPREADSHEET)

    console.log(info('>> Job manageSpreadsheet is running'))

    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    }, process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL_USE)

    await doc.loadInfo()

    await makeSheet(doc, 'Professoras', await teachersModel.find(), datasTeacher)
    await makeSheet(doc, 'Turmas', await classesModel.find().populate('teacher'), datasClass)
    await makeSheet(doc, 'Alunos', await studentsModel.find().populate(['class', 'teacher']).select(['+address']), datasStudent)
    await makeSheet(doc, 'Financeiro', await incomesOrExpensesModel.find(), datasFinance)
}

export default manageSpreadsheetJob