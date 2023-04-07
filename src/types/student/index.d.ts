import IClass from './class'
import ITeacher from '../teacher'
import IAddress from './address'
import IMatters from './matters'
import ICreated from './created'

interface IStudent {
    id: string
    cpf: string
    name: string
    birth: string
    email: string
    class: IClass
    gender: string
    teacher: ITeacher
    telephone: string
    situation: string
    address: IAddress
    matters: IMatters
    created: ICreated
    responsible1: string
    responsible2: string
}

export default IStudent