import { Request, Response } from 'express'
import generateQuestions from './generateQuestions'
import { Document, Paragraph, TextRun, Packer } from 'docx'

interface IBodyQuestions {
    prompt: string
}

async function createQuestions(req: Request<{}, {}, IBodyQuestions>, res: Response) {
    const { prompt } = req.body

    const questions = await generateQuestions(prompt)

    const paragraphs = questions.flatMap(question => {
        const paragraphs: Paragraph[] = []

        paragraphs.push(new Paragraph({
            children: [
                new TextRun({
                    bold: true,
                    text: question.title
                })
            ]
        }))

        question.alternatives.map(alternative => {
            paragraphs.push(new Paragraph(alternative))
        })

        paragraphs.push(new Paragraph(''))

        return paragraphs
    })

    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...paragraphs
                ]
            }
        ]
    })

    const stream = Packer.toStream(doc)

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    res.setHeader('Content-Disposition', 'attachment; filename=questions.docx')

    stream.pipe(res)
}

export default createQuestions