import { GoogleGenerativeAI } from '@google/generative-ai'
import config from './config'
import instruction from './instruction'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
    generationConfig: config,
    model: 'gemini-1.5-flash-8b',
    systemInstruction: instruction
})

export default model