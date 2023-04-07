import { IData } from '../../../services/generateSpreadsheetService/type'
import { IIncomeOrExpense } from '../../../types'
import dinero from 'dinero.js'

const datas: IData<IIncomeOrExpense>[] = [
    {
        name: 'ID',
        row: data => data._id
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
        name: 'Valor',
        row: data => dinero({ amount: data.valueRaw, currency: 'BRL' }).toUnit()
    },
    {
        name: 'Tipo',
        row: data => data.type === 'income' ? 'Receita' : 'Despesa'
    },
    {
        name: 'Data',
        row: data => new Date(data.date).toLocaleDateString('pt-br', { timeZone: 'UTC' })
    }
]

export default datas