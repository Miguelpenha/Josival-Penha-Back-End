import express, { Request } from 'express'
import { IKommoAPI, IUser } from './types'
import BoldAPI from './BoldAPI'
import sendToMeta from './MetaAPI'

const kommoRouter = express.Router()

kommoRouter.post('/', async (req: Request<{}, {}, IKommoAPI>, res) => {
  const { leads } = req.body
  const lead = leads.status[0]

  res.sendStatus(200)

  const dataBoldAPI = await BoldAPI(lead)

  const user: IUser = {
    statusID: lead.status_id,
    price: Number(lead.price),
    phone: dataBoldAPI.contact.fields.Phone
  }

  await sendToMeta(user)
})

export default kommoRouter