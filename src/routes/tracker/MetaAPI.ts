import { ICompany, IUser, IMetaAPI } from './kommo/types'
import toHash from './utils/toHash'
import { blueBright as info } from 'chalk'
import axios from 'axios'

async function sendToMeta(company: ICompany, user: IUser) {
    const URLGraphAPI = `${process.env.URL_GRAPH_API}/${process.env.VERSION_GRAPH_API}/${company.datasetID}/events?access_token=${company.accessToken}`
    
    const time = Math.floor(new Date().getTime()/1000)

    let data: IMetaAPI = {
        event_time: time,
        action_source: 'physical_store',
        user_data: {
            country: toHash('br'),
            ph: toHash(user.phone)
        }
    }

    if (user.status == 'AddToCart') {
        data = {
            ...data,
            event_name: 'AddToCart',
            custom_data: {
                currency: 'brl',
                value: user.price
            }
        }
    } else if (user.status == 'Purchase') {
        data = {
            ...data,
            event_name: 'Purchase',
            custom_data: {
                currency: 'brl',
                value: user.price
            }
        }
    }

    console.log(info(`>> ${data.event_name}`))
    console.log(info(`  >> ${user.phone}`))

    await axios.post(URLGraphAPI, {
      data: [data]
    })
}

export default sendToMeta