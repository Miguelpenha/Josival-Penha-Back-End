import companies from './companies'
import ITheme from './theme'

function useTheme(companyName: string) {
    const company = companies.find(company=> company.name === companyName)

    const theme: ITheme = {
        color: company.color
    }

    return theme
}

export default useTheme