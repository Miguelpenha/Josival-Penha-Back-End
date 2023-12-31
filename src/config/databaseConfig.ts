import mongoose from 'mongoose'

async function databaseConfig() {
    try {
        mongoose.set('strictQuery', true)

        await mongoose.connect(process.env.MONGO_URL)

        return { configured: true }
    } catch (error) {
        return { configured: false, error }
    }
}

export default databaseConfig