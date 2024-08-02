import { IKommoAPI } from './types'
import axios from 'axios'

interface IBoldAPI {
    contact: {
        name: string
        fields: {
            Phone: string
        }
    }
}

async function BoldAPI(lead: IKommoAPI['leads']['status'][0]) {
    const URLBoldAPI = `${process.env.URL_BOLD_API}/${process.env.VERSION_BOLD_API}/leads?include=contact`

    const requestBody = {
        account: {
            subdomain: process.env.ACCOUNT_BOLD_API
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

    return dataBoldAPI
}

export default BoldAPI