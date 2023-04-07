import { IRequestMessage } from '../../../services/sendMessage/types'
import sections from './sections'
import sendMessage from '../../../services/sendMessage'

async function messageInteractive(phoneToReceive: number) {
    const data: IRequestMessage =  {
        type: 'interactive',
        to: String(phoneToReceive),
        messaging_product: 'whatsapp',
        interactive: {
            type: 'list',
            header: {
                type: 'text',
                text: 'Ações'
            },
            body: {
                text: 'Ver ações disponíveis'
            },
            footer: {
                text: 'Algumas ações podem não estar disponíveis'
            },
            action: {
                button: 'Ver ações',
                sections: sections
            }
        }
    }

    const message = await sendMessage(data)

    return message
}

export default messageInteractive