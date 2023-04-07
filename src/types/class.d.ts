import ITeacher from './teacher'
import ICreated from './created'

interface IClass {
    id: string
    name: string
    grade: string
    shift: string
    teacher: ITeacher
    created: ICreated
}

export default IClass