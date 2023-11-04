import dinero from 'dinero.js'

function formatIncome(value: string) {
    if (!value.includes(',')) {
        value = `${value},00`
    }
    
    const valueRaw = Number(
        value
        .replace('.', '')
        .replace(',', '')
        .replace('R$', '')
        .trimStart()
    )

    const valueFormatted = dinero({ amount: valueRaw, currency: 'BRL' }).setLocale('pt-br').toFormat()

    return {
        valueRaw,
        valueFormatted
    }
}

export default formatIncome