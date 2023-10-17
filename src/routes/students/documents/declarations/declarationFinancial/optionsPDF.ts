import { IStudent } from '../../../../../types'

function optionsPDF(student: IStudent): PDFKit.PDFDocumentOptions {
    return {
        size: 'A4',
        margin: 60,
        lang: 'pt-br',
        displayTitle: true,
        info: {
            ModDate: new Date(),
            Author: 'Josival Penha',
            Creator: 'Josival Penha',
            CreationDate: new Date(),
            Producer: 'Josival Penha',
            Title: `Declaração financeira do aluno(a) ${student.name}`,
        }
    }
}

export default optionsPDF