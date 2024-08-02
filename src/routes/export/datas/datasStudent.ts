import { IData } from '../../../services/generateSpreadsheetService/type'
import { IStudent } from '../../../types'

const datas: IData<IStudent>[] = [
    {
        name: 'ID',
        row: data => data.id || (data as any)._id
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
        name: 'CEP',
        row: data => data.address && data.address.cep
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
        name: 'Professora',
        row: data => data.teacher && data.teacher.name
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