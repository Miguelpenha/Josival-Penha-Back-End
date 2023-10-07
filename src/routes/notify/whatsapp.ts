import { Request, Response } from 'express'
import twilio from 'twilio'

const clientTwilio = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

interface IWhatsappParams {
    to: string
}

interface IWhatsappBody {
    month: string
}

async function whatsapp(req: Request<IWhatsappParams, {}, IWhatsappBody>, res: Response) {
    const { to } = req.params

    if (to) {
        const { month } = req.body

        try {
            await clientTwilio
            .messages
            .create({
                to,
                from: process.env.TWILIO_NUMBER_FROM,
                mediaUrl: ['https://josivalpenha.com/img/thumbnail.png'],
                body: `Olá, pai/mãe!\n\nEstamos aqui para disponibilizar o boleto do mês ${month}, para o pagamento da mensalidade!\n\nEquipe Josival Penha 💙❤`
            })

            res.json({ send: true })
        } catch (error) {
            console.log(error)

            res.json({ send: false })
        }
    } else {
        res.json({ message: 'Param "to" is required' })
    }
}

export default whatsapp