import { IQuestion } from './types'
import { Paragraph, TextRun, Document, Packer } from 'docx'

function makeDocument(questions: IQuestion[]) {
    const paragraphs = questions.flatMap(question => {
        const paragraphs: Paragraph[] = []

        const paragraphQuestion = new Paragraph({
            children: [
                new TextRun({
                    bold: true,
                    text: question.title
                })
            ]
        })

        paragraphs.push(paragraphQuestion)

        question.alternatives.map((alternative, index) => {
            const isCorrect = question.correctAlternative === index

            paragraphs.push(new Paragraph({
                children: [
                    new TextRun({
                        text: alternative,
                        color: isCorrect ? '#1EAD42': '#000000'
                    })
                ]
            }))
        })

        paragraphs.push(new Paragraph(''))

        return paragraphs
    })

    const doc = new Document({
        sections: [
            {
                children: [...paragraphs]
            }
        ]
    })

    const stream = Packer.toStream(doc)

    return stream
}

export default makeDocument