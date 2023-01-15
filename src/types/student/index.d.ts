import IClass from './class'
import IAddress from './address'
import IMatters from './matters'
import ICreated from './created'

interface IStudent {
    cpf: string
    name: string
    birth: string
    email: string
    class: IClass
    gender: string
    telephone: string
    situation: string
    address: IAddress
    matters: IMatters
    created: ICreated
    responsible1: string
    responsible2: string
}

export default IStudent