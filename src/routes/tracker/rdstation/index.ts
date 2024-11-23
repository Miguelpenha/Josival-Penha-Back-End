import express, { Request } from 'express'
import { IRDStationAPI } from './types'
import companies from '../kommo/companies'
import { IUser } from '../types'
import formatPhone from '../utils/formatPhone'
import { blueBright as info } from 'chalk'
import sendToMeta from '../MetaAPI'

const RDStationRouter = express.Router()

RDStationRouter.post('/:companyID', async (req: Request<{ companyID: string }, {}, IRDStationAPI>, res) => {
	const { companyID } = req.params
	const { contact } = req.body

	const company = companies.filter(company => companyID.toUpperCase() === company.id)[0]
	
	let user: IUser = {
		price: Number(0),
		status: 'AddToCart',
		phone: formatPhone(contact.mobile_phone)
	}

	res.sendStatus(200)

	console.log(info('>> RDStation'))

	await sendToMeta(company, user)
})

export default RDStationRouter