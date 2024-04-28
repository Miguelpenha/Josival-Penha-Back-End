import express from 'express'
import videoRouter from './video'

const routerNyxel = express.Router()

routerNyxel.use('/video', videoRouter)

export default routerNyxel