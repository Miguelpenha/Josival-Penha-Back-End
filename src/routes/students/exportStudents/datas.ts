import { IData } from '../../../services/generateSpreadsheetService'
import { IStudent } from '../../../types'

const datas: IData<IStudent>[] = [
    {
        name: 'Nome',
        row: data => data.name
    },
    {
        name: 'Criação',
        row: data => data.created && data.created.date
    },
    {
        name: 'Nascimento',
        row: data => data.birth
    },
    {
        name: 'Situação',
        row: data => data.situation
    },
    {
        name: 'Telefone',
        row: data => data.telephone
    },
    {
        name: 'Email',
        row: data => data.email
    },
    {
        name: 'Responsável 1',
        row: data => data.responsible1
    },
    {
        name: 'Responsável 2',
        row: data => data.responsible2
    },
    {
        name: 'Gênero sexual',
        row: data => data.gender
    },
    {
        name: 'Cidade',
        row: data => data.address && data.address.city
    },
    {
        name: 'Rua',
        row: data => data.address && data.address.street
    },
    {
        name: 'Número',
        row: data => data.address && data.address.number
    },
    {
        name: 'Bairro',
        row: data => data.address && data.address.neighborhood
    },
    {
        name: 'Turma',
        row: data => data.class && data.class.name
    },
    {
        name: 'Série',
        row: data => data.class && data.class.grade
    },
    {
        name: 'Turno',
        row: data => data.class && data.class.shift
    }
]

export default datas