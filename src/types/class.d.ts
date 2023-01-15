import ITeacher from './teacher'
import ICreated from './created'

interface IClass {
    name: string
    grade: string
    shift: string
    teacher: ITeacher
    created: ICreated
    // students: IStudent[]
}

export default IClass