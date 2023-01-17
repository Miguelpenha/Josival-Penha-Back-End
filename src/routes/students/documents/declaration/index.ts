import { Request, Response } from 'express'
import { IDeclarationBody } from './type'
import mongoose from 'mongoose'
import studentsModel from '../../../../models/student'
import PDFKit from 'pdfkit'
import optionsPDF from './optionsPDF'
import makePDF from './makePDF'

interface IDeclarationParams {
    id: string
}

async function declaration(req: Request<IDeclarationParams, {}, IDeclarationBody>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const student = await studentsModel.findById(id)

        if (student) {
            const pdf = new PDFKit(optionsPDF(student))
            const declaration = makePDF(pdf, student, req.body)
            const chunks: Uint8Array[] = []

            declaration.on('data', chunks.push.bind(chunks))

            declaration.on('end', () => {
                res
                .contentType('application/pdf')
                .setHeader('Content-disposition', `attachment; filename=Declaração de frequência do aluno(a) ${student.name}.pdf`)
                .setHeader('Content-Length', Buffer.byteLength(Buffer.concat(chunks)))
                .end(Buffer.concat(chunks))
            })

            declaration.end()
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default declaration