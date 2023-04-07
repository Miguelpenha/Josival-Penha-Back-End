import api from './apiGraph'
import { IResponseMessage } from './types'
import url from './url'

async function sendMessage(data: object) {
    const { data: dataMessage } = await api.post<IResponseMessage>(url, data)

    return dataMessage
}

export default sendMessage