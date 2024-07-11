import express from 'express'
import videoRouter from './video'
import companies from './video/companies'
import ICompany from './video/company'

const nyxelRouter = express.Router()

nyxelRouter.use('/video', videoRouter)

nyxelRouter.get('/companies', async (req, res) => {
    res.json(companies)
})

nyxelRouter.get('/companies/:companyFolderURL', async (req, res) => {
    const { companyFolderURL } = req.params

    let company = null as any as ICompany

    companies.map(companyMap => {
        if (companyMap.folderURL === companyFolderURL) {
            company = companyMap
        }
    })

    res.json(company)
})

export default nyxelRouter