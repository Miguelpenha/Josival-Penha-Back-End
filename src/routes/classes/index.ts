import express from 'express'
import classes from './classes'
import exportClasses from './exportClasses'
import getClass from './class'
import createClass from './createClass'
import editClass from './editClass'
import deleteClass from './deleteClass'

const classesRouter = express.Router()

classesRouter.get('/', classes)
classesRouter.get('/export', exportClasses)
classesRouter.get('/:id', getClass)
classesRouter.post('/', createClass)
classesRouter.patch('/:id', editClass)
classesRouter.delete('/:id', deleteClass)

export default classesRouter