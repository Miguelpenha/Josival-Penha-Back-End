import { Request, Response } from 'express'

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

        res.json({ 
            link: `https://api.whatsapp.com/send?phone=${to}&text=https://josivalpenha.com%0a%0aOlá, pai/mãe!%0aEstamos aqui para disponibilizar o boleto do mês ${month}, para o pagamento da mensalidade!%0a%0aEquipe Josival Penha 💙❤`
        })
    } else {
        res.json({ message: 'Param "to" is required' })
    }
}

export default whatsapp