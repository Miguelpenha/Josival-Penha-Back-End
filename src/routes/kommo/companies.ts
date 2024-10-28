import { ICompany } from './types'

const companies: ICompany[] = process.env.ACCOUNTS_BOLD_API.split(',').map(companyRaw => {
    const company = companyRaw.toUpperCase()
    
    return ({
        id: company,
        datasetID: process.env[`GRAPH_API_DATASET_ID_${company}`],
        accessToken: process.env[`GRAPH_API_ACCESS_TOKEN_${company}`],
        statusIDs: JSON.parse(process.env[`GRAPH_API_STATUS_IDS_${company}`])
    })
})

export default companies