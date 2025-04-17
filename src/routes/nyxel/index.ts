import express from 'express'
import videoRouter from './video'
import companiesModel from '../../models/company'
import ICompany from '../../types/company'

const nyxelRouter = express.Router()

nyxelRouter.use('/video', videoRouter)

nyxelRouter.get('/companies', async (req, res) => {
    const companies = await companiesModel.find()

    res.json(companies)
})

nyxelRouter.get('/companies/:companyFolderURL', async (req, res) => {
    const { companyFolderURL } = req.params

    let company = null as any as ICompany
    const companies = await companiesModel.find()

    companies.map(companyMap => {
        if (companyMap.folderURL === companyFolderURL) {
            company = companyMap
        }
    })

    res.json(company)
})

export default nyxelRouter