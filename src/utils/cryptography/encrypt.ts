import crypto from 'crypto'

function encrypt(data: string) {
    if (data) {
        try {
            const iv = crypto.randomBytes(12)
            const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(process.env.SECRET_KEY_CRYPTO) as any, iv as any)
            let crip = cipher.update(data, 'utf8', 'hex')

            crip += cipher.final('hex')
            
            const tag = cipher.getAuthTag().toString('hex')

            return `${crip}:${iv.toString('hex')}:${tag}`
        } catch (error) {
            throw new Error(error)
        }
    } else {
        throw new Error('Data is required')
    }
}

export default encrypt