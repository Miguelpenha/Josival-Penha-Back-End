import express, { Request } from 'express'
import { ICompany, IKommoAPI, IUser } from './types'
import companies from './companies'
import BoldAPI from './BoldAPI'
import formatPhone from '../utils/formatPhone'
import sendToMeta from '../MetaAPI'

const kommoRouter = express.Router()

kommoRouter.post('/:companyID', async (req: Request<{ companyID: string }, {}, IKommoAPI>, res) => {
	const { companyID } = req.params
	const { leads } = req.body
	const lead = leads.status[0]
	
	try {
		const company = companies.filter(company => companyID.toUpperCase() === company.id)[0]
		const IDstatusID = Object.values(company.statusIDs).findIndex(ID => ID == lead.status_id)
		const status = IDstatusID >= 0 ? Object.keys(company.statusIDs)[IDstatusID] as keyof ICompany['statusIDs'] : false

		res.sendStatus(200)

		if (status) {
			const dataBoldAPI = await BoldAPI(company.id, lead)

			let user: IUser = {
				status,
				price: Number(lead.price),
				phone: formatPhone(dataBoldAPI.contact.fields.Phone)
			}

			await sendToMeta(company, user)
		}
	} catch (error) {
		console.log(error)

		res.sendStatus(500)
	}
})

export default kommoRouter