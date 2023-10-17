import { Request, Response } from 'express'
import { IDeclarationFrequencyQuery } from './type'
import mongoose from 'mongoose'
import studentsModel from '../../../../../models/student'
import PDFKit from 'pdfkit'
import optionsPDF from './optionsPDF'
import makePDF from './makePDF'

interface IDeclarationFrequencyParams {
    id: string
}

async function declarationFrequency(req: Request<IDeclarationFrequencyParams, {}, {}, IDeclarationFrequencyQuery>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const student = await studentsModel.findById(id).populate('class')

        if (student) {
            const pdf = new PDFKit(optionsPDF(student))
            const declaration = makePDF(pdf, student, req.query)

            declaration.pipe(res)

            declaration.end()

            res.contentType('application/pdf')
            res.setHeader('Content-disposition', `attachment; filename=Declaração de frequência do aluno(a) ${student.name}.pdf`)
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default declarationFrequency