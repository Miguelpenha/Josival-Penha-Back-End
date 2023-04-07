import express from 'express'
import incomesOrExpenses from './incomesOrExpenses'
import incomeOrExpense from './incomeOrExpense'
import createIncomeOrExpense from './createIncomeOrExpense'
import editIncomeOrExpense from './editIncomeOrExpense'
import deleteIncomeOrExpense from './deleteIncomeOrExpense'

const financeRouter = express.Router()

financeRouter.get('/', incomesOrExpenses)
financeRouter.get('/:id', incomeOrExpense)
financeRouter.post('/', createIncomeOrExpense)
financeRouter.patch('/:id', editIncomeOrExpense)
financeRouter.delete('/:id', deleteIncomeOrExpense)

export default financeRouter