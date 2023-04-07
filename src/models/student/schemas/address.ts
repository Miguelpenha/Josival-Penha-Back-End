import mongoose from 'mongoose'
import IAddress from '../../../types/student/address'

const address = new mongoose.Schema<IAddress>({
    cep: String,
    city: String,
    street: String,
    number: String,
    complement: String,
    neighborhood: String
})

export default address