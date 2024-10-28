import express, { Request } from 'express'
import { IKommoAPI, IUser } from './types'
import companies from './companies'
import BoldAPI from './BoldAPI'
import formatPhone from './utils/formatPhone'
import sendToMeta from './MetaAPI'

const kommoRouter = express.Router()

kommoRouter.post('/:companyID', async (req: Request<{ companyID: string }, {}, IKommoAPI>, res) => {
	const { companyID } = req.params
	const { leads } = req.body
	const lead = leads.status[0]

	const company = companies.filter(company => companyID.toUpperCase() === company.id)[0]
	const statusID = Object.values(company.statusIDs).map(ID => lead.status_id == ID && ID).filter(value => value)[0]

	res.sendStatus(200)

	console.log(statusID)

	if (statusID) {
		const dataBoldAPI = await BoldAPI(company.id, lead)

		let user: IUser = {
			statusID: lead.status_id,
			price: Number(lead.price),
			phone: formatPhone(dataBoldAPI.contact.fields.Phone)
		}

		await sendToMeta(company, user)
  	}
})

export default kommoRouter