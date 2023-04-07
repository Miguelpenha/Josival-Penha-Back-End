import { IParams } from './types'

function selectNote(params: IParams) {
    const gradesValue = Object.values(params.grades)
    let sum = 0

    gradesValue.map((grade: number) => sum = sum+grade)

    const average = (sum/gradesValue.length)

    if (average >= 8.5) {
        return `Gostaríamos de parabenizar ${params.student.trim().split(' ')[0]} pelos excelentes resultados!! Estamos orgulhosos do esforço e dedicação ${params.gender === 'Feminino' ? 'dela' : 'dele'} durante este período. Continue ${params.gender === 'Feminino' ? 'incentivando-a' : 'incentivando-o'} em sua jornada!`
    } else if (average > 7) {
        return `Estamos orgulhos do trabalho ${params.gender === 'Feminino' ? 'dela' : 'dele'}! Porém, não deixem de continuar estimulando o estudo e o aperfeiçoamento ${params.gender === 'Feminino' ? 'dela' : 'dele'}.`
    } else {
        return `Embora não tenham sido as que esperávamos, acreditamos que ${params.gender === 'Feminino' ? 'ela' : 'ele'} tem o potencial para melhorar. Vamos ${params.gender === 'Feminino' ? 'incentivá-la' : 'incentivá-lo'} a estudar mais e aproveitar ao máximo a próxima unidade. Sei que ${params.gender === 'Feminino' ? 'ela' : 'ele'} pode alcançar grandes resultados com o seu apoio.`
    }
}

export default selectNote