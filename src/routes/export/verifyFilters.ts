enum IFilter {
    Alunos='Alunos',
    Turmas='Turmas',
    Receitas='Receitas',
    Professoras='Professoras'
}

function verifyFilters(filters: string) {
    const filtersList = filters.split(',')
    const filtersIncorrect = []

    filtersList.map(filter => {
        if (!(filter in IFilter)) {
            if (filter) {
                filtersIncorrect.push(filter)
            }
        }
    })

    return {
        filtersIncorrect,
        correct: !Boolean(filtersIncorrect.length)
    }
}

export default verifyFilters