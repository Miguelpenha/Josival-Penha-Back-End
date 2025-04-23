import express, { Request } from 'express'
import { IKommoAPI } from './types'
import companies from './companies'
import getStatus from './getStatus'
import BoldAPI from './BoldAPI'
import { IUser } from '../types'
import formatPhone from '../utils/formatPhone'
import { blueBright as info } from 'chalk'
import sendToMeta from '../MetaAPI'

const kommoRouter = express.Router()

kommoRouter.post('/:companyID', async (req: Request<{ companyID: string }, {}, IKommoAPI>, res) => {
	const { companyID } = req.params
	const { leads } = req.body
	const lead = leads.status[0]
	
	try {
		const company = companies.filter(company => companyID.toUpperCase() === company.id)[0]
		const status = getStatus(company, lead)

		res.sendStatus(200)

		if (status) {
			const dataBoldAPI = await BoldAPI(company.id, lead)

			if (dataBoldAPI?.contact?.fields?.Phone) {
				let user: IUser = {
					status,
					price: Number(lead.price),
					phone: formatPhone(dataBoldAPI.contact.fields.Phone)
				}
	
				console.log(info('>> Kommo'))
	
				await sendToMeta(company, user)
			}
		}
	} catch (error) {
		console.log(error)

		res.sendStatus(500)
	}
})

export default kommoRouter