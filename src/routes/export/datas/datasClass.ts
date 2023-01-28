import { IData } from '../../../services/generateSpreadsheetService/type'
import { IClass } from '../../../types'

const datas: IData<IClass>[] = [
    {
        name: 'ID',
        row: data => data.id
    },
    {
        name: 'Nome',
        row: data => data.name
    },
    {
        name: 'Criação',
        row: data => data.created && data.created.date
    },
    {
        name: 'Série',
        row: data => data.grade
    },
    {
        name: 'Turno',
        row: data => data.shift
    },
    {
        name: 'Professora',
        row: data => data.teacher.name
    }
]

export default datas