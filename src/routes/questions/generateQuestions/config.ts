import { BaseParams, SchemaType } from '@google/generative-ai'

const config: BaseParams['generationConfig'] = {
    responseMimeType: 'application/json',
    responseSchema: {
        type: SchemaType.ARRAY,
        description: 'Lista de questões',
        items: {
            type: SchemaType.OBJECT,
            required: ['title', 'alternatives', 'correctAlternative'],
            properties: {
                title: {
                    type: SchemaType.STRING,
                    description: 'Texto da questão'
                },
                alternatives: {
                    type: SchemaType.ARRAY,
                    items: { type: SchemaType.STRING },
                    description: 'Alternativas da questão'
                },
                correctAlternative: {
                    type: SchemaType.NUMBER,
                    description: 'Índice da alternativa correta'
                }
            }
        }
    }
}

export default config