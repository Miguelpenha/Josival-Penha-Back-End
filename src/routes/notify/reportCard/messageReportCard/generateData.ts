import { IParams } from './types'
import { IRequestMessage } from '../../../../services/sendMessage/types'
import formatGrade from './formatGrade'
import selectNote from './selectNote'

function generateData(phoneToReceive: number, params: IParams): IRequestMessage {
    return {
        type: 'template',
        to: String(phoneToReceive),
        messaging_product: 'whatsapp',
        template: {
            name: 'notas_escolares',
            language: {
                code: 'pt_BR'
            },
            components: [
                {
                    type: 'header',
                    parameters: [
                        {
                            type: 'image',
                            image: {
                                link: params.image
                            }
                        }
                    ]
                },
                {
                    type: 'body',
                    parameters: [
                        {
                            type: 'text',
                            text: params.responsible
                        },
                        {
                            type: 'text',
                            text: String(params.unit)
                        },
                        {
                            type: 'text',
                            text: params.student
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.portuguese[params.unit] || ' ')
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.math[params.unit] || ' ')
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.history[params.unit] || ' ')
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.geography[params.unit] || ' ')
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.science[params.unit] || ' ')
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.english[params.unit] || ' ')
                        },
                        {
                            type: 'text',
                            text: selectNote(params)
                        },
                    ]
                },
                {
                    index: 1,
                    type: 'button',
                    sub_type: 'URL',
                    parameters: [
                        {
                            type: 'text',
                            text: params.urlBankSlip
                        }
                    ]
                }
            ]
        }
    }
}

export default generateData