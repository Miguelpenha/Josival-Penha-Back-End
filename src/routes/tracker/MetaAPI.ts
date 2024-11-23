import { IUser, IMetaAPI } from './types'
import toHash from './utils/toHash'
import { blueBright as info } from 'chalk'
import axios from 'axios'

interface IConfig {
    datasetID: string
    accessToken: string
}

async function sendToMeta(config: IConfig, user: IUser) {
    const URLGraphAPI = `${process.env.URL_GRAPH_API}/${process.env.VERSION_GRAPH_API}/${config.datasetID}/events?access_token=${config.accessToken}`
    
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
    
    console.log(info(`  >> Event: ${data.event_name}`))
    console.log(info(`  >> Phone: ${user.phone}`))
    console.log(info(`  >> Price: ${user.price}`))

    await axios.post(URLGraphAPI, {
      data: [data]
    })
}

export default sendToMeta