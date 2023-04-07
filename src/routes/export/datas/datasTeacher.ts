import { IData } from '../../../services/generateSpreadsheetService/type'
import { ITeacher } from '../../../types'

const datas: IData<ITeacher>[] = [
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
        name: 'Gênero sexual',
        row: data => data.gender
    }
]

export default datas