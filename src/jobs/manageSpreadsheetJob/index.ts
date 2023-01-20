import { GoogleSpreadsheet } from 'google-spreadsheet'
import { blueBright as info } from 'chalk'
import studentsSheet from './makeSheet'
import teachersModel from '../../models/teacher'
import datasTeacher from '../../routes/exportGeneral/datasTeacher'
import classesModel from '../../models/class'
import datasClass from '../../routes/exportGeneral/datasClass'
import studentsModel from '../../models/student'
import datasStudent from '../../routes/exportGeneral/datasStudent'

async function manageSpreadsheetJob() {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_ID_SPREADSHEET)

    console.log(info('>> Job manageSpreadsheet is running'))

    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    }, process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL_USE)

    await doc.loadInfo()

    await studentsSheet(doc, 'Professoras', await teachersModel.find(), datasTeacher)
    await studentsSheet(doc, 'Turmas', await classesModel.find().populate('teacher'), datasClass)
    await studentsSheet(doc, 'Alunos', await studentsModel.find().populate(['class', 'teacher']).select(['+address']), datasStudent)
}

export default manageSpreadsheetJob