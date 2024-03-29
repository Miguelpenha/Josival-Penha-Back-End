import { Request, Response } from 'express'
import { IDeclarationFinancialQuery } from './type'
import mongoose from 'mongoose'
import studentsModel from '../../../../../models/student'
import PDFKit from 'pdfkit'
import optionsPDF from './optionsPDF'
import makePDF from './makePDF'

interface IDeclarationFinancialParams {
    id: string
}

async function declarationFinancial(req: Request<IDeclarationFinancialParams, {}, {}, IDeclarationFinancialQuery>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const student = await studentsModel.findById(id).populate('class')

        if (student) {
            const pdf = new PDFKit(optionsPDF(student))
            const declaration = makePDF(pdf, student, req.query)

            declaration.pipe(res)

            declaration.end()

            res.contentType('application/pdf')
            res.setHeader('Content-disposition', `attachment; filename=Declaração financeira do aluno(a) ${student.name}.pdf`)
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default declarationFinancial