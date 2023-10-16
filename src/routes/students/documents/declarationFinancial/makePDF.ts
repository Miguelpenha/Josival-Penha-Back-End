import path from 'path'
import { IStudent } from '../../../../types'
import { IDeclarationFinancialQuery } from './type'

const pathLogoJP = path.resolve(__dirname, '..', '..', '..', '..', '..', 'public', 'logo-Josival-Penha.png')

function makePDF(pdf: PDFKit.PDFDocument, student: IStudent, query: IDeclarationFinancialQuery) {
    const date = new Date().toLocaleDateString('pt-br', {
        dateStyle: 'long'
    })
    const { month } = query

    pdf
    .opacity(0.15)
    .image(pathLogoJP, 150, 300, {
        width: 300
    })
    .opacity(1)
    .image(pathLogoJP, 250, 79, {
        width: 90
    })
    .font('Helvetica-Bold')
    .moveDown(8.4)
    .text('Instituto Educacional Josival Penha', {
        align: 'center'
    })
    .font('Helvetica')
    .moveDown(0.4)
    .text('Cadastro Escolar nº P. 109.212 / INEP nº 26170981', {
        align: 'center'
    })
    .moveDown(0.4)
    .text('Portaria SEE nº 888 D.O 18/02/2003', {
        align: 'center'
    })
    .moveDown(0.4)
    .text('CNPJ: 11.654.198/0001-43', {
        align: 'center'
    })
    .fontSize(20)
    .moveDown(2)
    .font('Helvetica-Bold')
    .text('DECLARAÇÃO', {
        align: 'center'
    })
    .font('Helvetica')
    .fontSize(13)
    .moveDown(3)
    .text(`Paulista, ${date}`, {
        align: 'right'
    })
    .moveDown(2)
    .text('Declaramos para os devidos fins que a aluno(a) ', {
        continued: true,
        align: 'justify'
    })
    .font('Helvetica-Bold')
    .text(student.name, {
        continued: true,
        align: 'left'
    })
    .font('Helvetica')
    .text(', nascido(a) em: ', {
        continued: true,
        align: 'justify'
    })
    .font('Helvetica-Bold')
    .text(student.birth, {
        continued: true,
        align: 'left'
    })
    .font('Helvetica')
    .text(', filho(a) de ', {
        continued: true,
        align: 'justify'
    })
    .font('Helvetica-Bold')
    .text(student.responsible1, {
        continued: true,
        align: 'left'
    })
    .font('Helvetica')
    .text(' e ', {
        continued: true,
        align: 'justify'
    })
    .font('Helvetica-Bold')
    .text(student.responsible2, {
        continued: true,
        align: 'left'
    })
    .font('Helvetica')
    .text(`, matriculado(a) neste estabelecimento de Ensino no ${student.class.grade} do Ensino Fundamental.`, {
        align: 'left'
    })
    .moveDown(1.5)
    
    pdf
    .text(`Está adimplente com a mensalidade até ${month} de ${new Date().toLocaleDateString('pt-br').split('/')[2]}`)
    .moveDown(6.2)
    .fontSize(12)
    .text('__________________________________', {
        align: 'center'
    })
    .fontSize(14)
    .moveDown(0.4)
    .text('Diretora', {
        align: 'center'
    })
    .font('Helvetica-Bold')
    .fontSize(11)
    .text('tel. (81) 3437-2618', 100, 752)
    .text('Av. João Paulo II, 894', 240, 751)
    .text('www.josivalpenha.com', 385, 750)
    .text('cel. (81) 99499-7501', 100, 768)
    .text('Mirueira, Paulista - PE', 240, 767)
    .text('@josival.penha', 385, 766)

    return pdf
}

export default makePDF