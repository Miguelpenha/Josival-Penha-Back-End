import express, { Request } from 'express'
import messageInteractive from './messageInteractive'

const whatsappRouter = express.Router()

interface IMessagesQuery {
    'hub.mode': string
    'hub.verify_token': string
}

whatsappRouter.get('/', (req: Request<{}, {}, {}, IMessagesQuery>, res) => {
    if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] == process.env.TOKEN_VERIFICATION_WEBHOOK_GRAPH) {
        res.send(req.query['hub.challenge'])
    } else {
        res.sendStatus(400)
    }
})

whatsappRouter.post('/', (req, res) => {
    if (req.body.entry[0].changes[0].value.messages) {
        req.body.entry[0].changes[0].value.messages.map(async message => {
            if (message.text && message.text.body) {
                messageInteractive(message.from)
            } else if (message.interactive.list_reply.id) {
                const option = message.interactive.list_reply.id

                if (option === 'boleto') {
                    // messageBoleto(message.from, )
                } else if (option === 'boletim') {
                    // messageReportCard(message.from, )
                }
            }
        })
    }

    res.sendStatus(200)
})

export default whatsappRouter