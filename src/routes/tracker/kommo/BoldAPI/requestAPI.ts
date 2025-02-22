import { IKommoAPI } from '../types'
import IBoldAPI from './type'
import axios from 'axios'
import cache from './cache'

async function requestAPI(companyID: string, lead: IKommoAPI['leads']['status'][0]) {
    const URLBoldAPI = `${process.env.URL_BOLD_API}/${process.env.VERSION_BOLD_API}/leads?include=contact`

    const requestBody = {
        account: {
            subdomain: companyID
        },
        leads: {
            add: [
                {
                    id: lead.id
                }
            ]
        }
    }

    const { data }: { data: IBoldAPI[] } = (await axios.post(URLBoldAPI, requestBody)).data

    const dataBoldAPI = data[0]

    cache.create(dataBoldAPI)

    return dataBoldAPI
}

export default requestAPI