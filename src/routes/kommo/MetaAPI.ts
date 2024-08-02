import { IUser, IMetaAPI, StatusIDs } from './types'
import toHash from './utils/toHash'
import axios from 'axios'

async function sendToMeta(user: IUser) {
    const URLGraphAPI = `${process.env.URL_GRAPH_API}/${process.env.VERSION_GRAPH_API}/${process.env.DATASET_ID_GRAPH_API}/events?access_token=${process.env.ACCESS_TOKEN_GRAPH_API}`
    
    const time = Math.floor(new Date().getTime()/1000)

    let data: IMetaAPI = {
        event_time: time,
        action_source: 'website',
        user_data: {
            ph: toHash(user.phone)
        }
    }

    if (user.statusID == StatusIDs.Lead) {
        data = {
            ...data,
            event_name: 'Lead'
        }
    } else if (user.statusID == StatusIDs.Purchase) {
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
    } else {
        data = {
            ...data,
            event_name: 'Other'
        }
    }

    await axios.post(URLGraphAPI, {
      data: [data],
      test_event_code: process.env.TEST_EVENT_CODE_GRAPH_API
    })
}

export default sendToMeta