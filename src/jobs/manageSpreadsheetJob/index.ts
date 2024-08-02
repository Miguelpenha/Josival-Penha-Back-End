import { JWT } from 'google-auth-library'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { blueBright as info } from 'chalk'
import makeSheet from './makeSheet'
import teachersModel from '../../models/teacher'
import datasTeacher from '../../routes/export/datas/datasTeacher'
import classesModel from '../../models/class'
import datasClass from '../../routes/export/datas/datasClass'
import studentsModel from '../../models/student'
import datasStudent from '../../routes/export/datas/datasStudent'
import incomesModel from '../../models/income'
import datasIncome from '../../routes/export/datas/datasIncome'

async function manageSpreadsheetJob() {
    const serviceAccountAuth = new JWT({
        scopes: process.env.GOOGLE_SCOPES.split(','),
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        subject: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_ID_SPREADSHEET, serviceAccountAuth)

    console.log(info('>> Job manageSpreadsheet is running'))

    await doc.loadInfo()

    await makeSheet(doc, 'Professoras', await teachersModel.find(), datasTeacher)
    await makeSheet(doc, 'Turmas', await classesModel.find().populate('teacher'), datasClass)
    await makeSheet(doc, 'Alunos', await studentsModel.find().populate(['class', 'teacher']).select(['+address']), datasStudent)
    await makeSheet(doc, 'Receitas', await incomesModel.find().populate('student'), datasIncome)
}

export default manageSpreadsheetJob