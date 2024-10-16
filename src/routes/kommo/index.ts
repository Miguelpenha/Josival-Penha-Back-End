import express, { Request } from 'express'
import { IKommoAPI, IUser } from './types'
import BoldAPI from './BoldAPI'
import sendToMeta from './MetaAPI'
import statusIDs from './statusIDs'
import formatPhone from './utils/formatPhone'

const kommoRouter = express.Router()

kommoRouter.post('/', async (req: Request<{}, {}, IKommoAPI>, res) => {
	const { leads } = req.body
	const lead = leads.status[0]

	const statusID = Object.values(statusIDs).map(ID => lead.status_id == ID && ID).filter(value => value)[0]

	res.sendStatus(200)

	if (statusID) {
		const dataBoldAPI = await BoldAPI(lead)

		let user: IUser = {
			statusID: lead.status_id,
			price: Number(lead.price),
			phone: formatPhone(dataBoldAPI.contact.fields.Phone)
		}

		lead.custom_fields.map(field => {
			if (field.id == '1405744' && field.values[0]) {
				user.services = field.values.map(item => item.value)
			}
		})

		await sendToMeta(user)
  	}
})

export default kommoRouter