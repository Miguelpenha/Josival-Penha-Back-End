import crypto from 'crypto'

function decrypt(data: string) {
    if (data) {
        try {
            const iv = Buffer.from(data.split(':')[1], 'hex')
            const tag = Buffer.from(data.split(':')[2], 'hex')
            const decipher = crypto.createDecipheriv('aes-256-gcm', process.env.SECRET_KEY_CRYPTO, iv as any)

            decipher.setAuthTag(tag as any)

            let dec = decipher.update(data.split(':')[0], 'hex', 'utf8')
            
            dec += decipher.final('utf8')

            return String(dec)
        } catch (error) {
            throw new Error(error)
        }
    } else {
        throw new Error('Data is required')
    }
}

export default decrypt