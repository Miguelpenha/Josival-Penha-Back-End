import { createHash } from 'crypto'

function toHash(value: string) {
    const hash = createHash('sha256').update(value).digest('hex')

    return hash
}

export default toHash