import IStudent from './student'
import ICreated from './created'

interface IIncome {
    _id: string
    value: string
    payDate: string
    valueRaw: number
    category: string
    student: IStudent
    payMethod: string
    created: ICreated
    billingDate: string
}

export default IIncome