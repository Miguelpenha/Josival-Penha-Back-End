import { IKommoAPI } from '../types'
import cache from './cache'
import requestAPI from './requestAPI'

async function BoldAPI(companyID: string, lead: IKommoAPI['leads']['status'][0]) {
    const leadIsCached = cache.get(lead)

    if (!leadIsCached) {
        return await requestAPI(companyID, lead)
    } else {
        return leadIsCached
    }
}

export default BoldAPI