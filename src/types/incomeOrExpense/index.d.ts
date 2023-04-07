import ICreated from './created'
import types from './types'

export type Type = keyof typeof types

interface IIncomeOrExpense {
    id: string
    type: Type
    date: Date
    _id: string
    name: string
    value: string
    valueRaw: number
    created: ICreated
}

export default IIncomeOrExpense