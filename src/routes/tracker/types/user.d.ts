import { eventName } from './MetaAPI'

interface IUser {
    price: number
    phone: string
    email?: string
    status: eventName
}

export default IUser