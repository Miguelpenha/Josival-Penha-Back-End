import model from './model'
import { IQuestion } from '../types'

async function generateQuestions(context: string, subject: string, count: number, classSchool: string) {
    const chat = model.startChat()
    const { response } = await chat.sendMessage(`
        Contexto: ${JSON.stringify(context)}

        Prompt: Faça ${count} questões sobre ${subject}, considere que as questões devem ser para a classe do ${classSchool}
    `)

    const questions: IQuestion[] = JSON.parse(response.text())

    return questions
}

export default generateQuestions