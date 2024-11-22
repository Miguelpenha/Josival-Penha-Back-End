import express, { Request } from 'express'
import IUser from '../types/user'
import companies from '../kommo/companies'
import sendToMeta from '../MetaAPI'
import formatPhone from '../utils/formatPhone'

interface IRDStationAPI {
	contact: {
		mobile_phone: string
	}
}

const RDStationRouter = express.Router()

RDStationRouter.post('/:companyID', async (req: Request<{ companyID: string }, {}, IRDStationAPI>, res) => {
	const { companyID } = req.params
	const { contact } = req.body
	
	const company = companies.filter(company => companyID.toUpperCase() === company.id)[0]

	res.sendStatus(200)

	let user: IUser = {
		price: Number(0),
		status: 'AddToCart',
		phone: formatPhone(contact.mobile_phone)
	}

	await sendToMeta(company, user)
})

export default RDStationRouter