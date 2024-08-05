import express, { Request } from 'express'
import { IKommoAPI, IUser } from './types'
import BoldAPI from './BoldAPI'
import sendToMeta from './MetaAPI'

const kommoRouter = express.Router()

kommoRouter.post('/', async (req: Request<{}, {}, IKommoAPI>, res) => {
  const { leads } = req.body
  const lead = leads.status[0]

  const dataBoldAPI = await BoldAPI(lead)

  if (dataBoldAPI) {
    const user: IUser = {
      statusID: lead.status_id,
      price: Number(lead.price),
      phone: dataBoldAPI.contact.fields.Phone
    }

    await sendToMeta(user)

    res.sendStatus(200)
  }
})

export default kommoRouter