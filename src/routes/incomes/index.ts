import express from 'express'
import incomes from './incomes'
import income from './income'
import createIncome from './createIncome'
import editIncomeOrExpense from './editIncome'
import deleteIncomeOrExpense from './deleteIncome'

const incomesRouter = express.Router()

incomesRouter.get('/', incomes)
incomesRouter.get('/:id', income)
incomesRouter.post('/', createIncome)
incomesRouter.patch('/:id', editIncomeOrExpense)
incomesRouter.delete('/:id', deleteIncomeOrExpense)

export default incomesRouter