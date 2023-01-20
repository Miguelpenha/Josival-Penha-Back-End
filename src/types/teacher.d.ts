import ICreated from './created'
import IClass from './class'

interface ITeacher {
    id: string
    name: string
    login: string
    gender: string
    password: string
    created: ICreated
}

export default ITeacher