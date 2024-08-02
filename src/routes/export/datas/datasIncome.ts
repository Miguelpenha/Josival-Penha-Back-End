import { IData } from '../../../services/generateSpreadsheetService/type'
import IIncome from '../../../types/income'

const datas: IData<IIncome>[] = [
    {
        name: 'ID',
        row: data => data._id
    },
    {
        name: 'Valor',
        row: data => data.value
    },
    {
        name: 'Criação',
        row: data => data.created && data.created.date
    },
    {
        name: 'Categoria',
        row: data => data.category
    },
    {
        name: 'Método',
        row: data => data.payMethod
    },
    {
        name: 'Cobrança',
        row: data => data.billingDate
    },
    {
        name: 'Pagamento',
        row: data => data.payDate
    },
    {
        name: 'ID do Aluno',
        row: data => data.student.id || (data as any).student._id
    },
    {
        name: 'Aluno',
        row: data => data.student.name
    }
]

export default datas