import { IUser, IMetaAPI } from './types'
import toHash from './utils/toHash'
import statusIDs from './statusIDs'
import axios from 'axios'

async function sendToMeta(user: IUser) {
    const URLGraphAPI = `${process.env.URL_GRAPH_API}/${process.env.VERSION_GRAPH_API}/${process.env.DATASET_ID_GRAPH_API}/events?access_token=${process.env.ACCESS_TOKEN_GRAPH_API}`
    
    const time = Math.floor(new Date().getTime()/1000)

    let data: IMetaAPI = {
        event_time: time,
        action_source: 'physical_store',
        user_data: {
            country: toHash('br'),
            ph: toHash(user.phone)
        }
    }

    if (user.statusID == statusIDs.Lead) {
        data = {
            ...data,
            event_name: 'Lead'
        }
    } else if (user.statusID == statusIDs.Purchase) {
        data = {
            ...data,
            event_name: 'Purchase',
            custom_data: {
                currency: 'brl',
                value: user.price,
                contents: [{
                    quantity: 1,
                    id: 'product123'
                }]
            }
        }
    }

    await axios.post(URLGraphAPI, {
      data: [data],
      // test_event_code: process.env.TEST_EVENT_CODE_GRAPH_API
    })
}

export default sendToMeta