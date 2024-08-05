import IBoldAPI from '../type'
import fs from 'fs'
import pathCache from './pathCache'

function createCache(data: IBoldAPI) {
    const cache: IBoldAPI[] = JSON.parse(fs.readFileSync(pathCache).toString('utf-8') || '[]')

    fs.writeFileSync(pathCache, JSON.stringify([...cache, data], null, '  '))
}

export default createCache