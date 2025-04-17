import ICompany from '../../../../types/company'
import ITheme from './theme'

function useTheme(company: ICompany) {
    const theme: ITheme = {
        color: company.color
    }

    return theme
}

export default useTheme