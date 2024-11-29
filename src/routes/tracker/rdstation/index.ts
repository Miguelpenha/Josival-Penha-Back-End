import express, { Request } from 'express'
import { IRDStationAPI } from './types'
import companies from '../kommo/companies'
import { IUser } from '../types'
import formatPhone from '../utils/formatPhone'
import { blueBright as info } from 'chalk'
import sendToMeta from '../MetaAPI'

const RDStationRouter = express.Router()

RDStationRouter.all('/:companyID', async (req: Request<{ companyID: string }, {}, IRDStationAPI>, res) => {
	const { companyID } = req.params
	const { leads } = req.body
	const lead = leads[0]

	try {
		const company = companies.filter(company => companyID.toUpperCase() === company.id)[0]
	
		let user: IUser = {
			price: 0,
			email: lead.email,
			status: 'AddToCart',
			phone: formatPhone(lead.mobile_phone || lead.personal_phone)
		}

		res.sendStatus(200)

		console.log(info('>> RDStation'))

		await sendToMeta(company, user)
	} catch (error) {
		console.log(error)

		res.sendStatus(500)
	}
})

export default RDStationRouter