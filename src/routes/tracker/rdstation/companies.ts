import { ICompany } from './types'

const companies: ICompany[] = process.env.ACCOUNTS_RDSTATION.split(',').map(companyRaw => {
    const company = companyRaw.toUpperCase()
    
    return ({
        id: company,
        datasetID: process.env[`GRAPH_API_DATASET_ID_${company}`],
        accessToken: process.env[`GRAPH_API_ACCESS_TOKEN_${company}`]
    })
})

export default companies