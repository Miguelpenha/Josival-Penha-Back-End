import dinero from 'dinero.js'

function formatIncomeOrExpense(value: string) {
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

    const valueFormatted = dinero({ amount: valueRaw, currency: 'BRL' }).toFormat().replace('R$', 'R$ ')

    return {
        valueRaw,
        valueFormatted
    }
}

export default formatIncomeOrExpense