import { IParams } from './types'
import generateData from './generateData'
import sendMessage from '../../../../services/sendMessage'

async function messageReportCard(phoneToReceive: number, params: IParams) {
    const data = generateData(phoneToReceive, params)
    
    const message = await sendMessage(data)

    return message
}

export default messageReportCard