import { Request, Response } from 'express'
import searchContext from './searchContext'
import generateQuestions from './generateQuestions'
import makeDocument from './makeDocument'

interface IBodyQuestions {
    count: number
    class: string
    subject: string
}

async function createQuestions(req: Request<{}, {}, IBodyQuestions>, res: Response) {
    const { count, subject, class: classSchool } = req.body

    const context = await searchContext(subject)
    const questions = await generateQuestions(context, subject, count, classSchool)

    const document = makeDocument(questions)

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    res.setHeader('Content-Disposition', 'attachment; filename=questions.docx')

    document.pipe(res)
}

export default createQuestions