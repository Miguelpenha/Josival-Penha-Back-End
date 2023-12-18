import mongoose from 'mongoose'

async function databaseConfig() {
    mongoose.set('strictQuery', true)

    await mongoose.connect(process.env.MONGO_URL)
    
}

export default databaseConfig