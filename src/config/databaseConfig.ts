import mongoose from 'mongoose'

async function databaseConfig() {
    try {
        mongoose.set('strictQuery', true)

        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        throw new Error(error)
    }
}

export default databaseConfig