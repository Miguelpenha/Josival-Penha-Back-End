import { ICompany, IKommoAPI } from './types'
import { eventName } from '../types/MetaAPI'

function getStatus(company: ICompany, lead: IKommoAPI['leads']['status'][0]) {
    const statusIDsValues = Object.values(company.statusIDs)
    const statusIDsKeys = Object.keys(company.statusIDs)

    const indexStatusID = statusIDsValues.findIndex(ID => ID == lead.status_id)

    if (indexStatusID >= 0) {
        const status = statusIDsKeys[indexStatusID]
        
        return status as eventName
    } else {
        return false
    }
}

export default getStatus