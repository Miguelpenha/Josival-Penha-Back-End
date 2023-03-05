import { Request, Response } from 'express'
import incomesOrExpensesModel from '../../models/incomeOrExpense'

interface IIncomesOrExpensesQuery {
    type: (string | undefined)
    month: (string | undefined)
    count: (string | undefined)
}

async function incomesOrExpenses(req: Request<{}, {}, {}, IIncomesOrExpensesQuery>, res: Response) {
    const { count, month, type } = req.query

    if (count !== 'false' && count) {
        const incomesOrExpensesCount = await incomesOrExpensesModel.estimatedDocumentCount()

        res.json({ count: incomesOrExpensesCount })
    } else {
        let query = {} as { type: string, date: string }

        if (type) {
            query.type = type
        }

        const incomesOrExpenses = await incomesOrExpensesModel.find(query)

        if (month) {
            const incomesOrExpensesSelected = []

            incomesOrExpenses.map(incomeOrExpense => {
                const date = new Date(incomeOrExpense.date).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                const monthSelected = date.split('/')[1]
                
                if (month == monthSelected) {
                    incomesOrExpensesSelected.push(incomeOrExpense)
                }
            })

            res.json(incomesOrExpensesSelected)
        } else {
            res.json(incomesOrExpenses)
        }
    }
}

export default incomesOrExpenses