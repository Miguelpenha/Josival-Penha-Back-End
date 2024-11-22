import { ICompany } from '../kommo/types'

interface IUser {
    price: number
    phone: string
    status: keyof ICompany['statusIDs']
}

export default IUser