import model from './model'
import { IQuestion } from '../types'

async function generateQuestions(prompt: string) {
    const chat = model.startChat()
    const { response } = await chat.sendMessage(prompt)

    const questions: IQuestion[] = JSON.parse(response.text())

    return questions
}

export default generateQuestions