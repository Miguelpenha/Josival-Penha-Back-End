export interface IGrades {
    math: number
    english: number
    history: number
    science: number
    geography: number
    portuguese: number
}

export type IGender = 'Masculino' | 'Feminino'

export interface IParams {
    unit: number
    image: string
    grades: IGrades
    student: string
    gender: IGender
    urlBankSlip: string
    responsible: string
}