import { IKommoAPI } from '../../types'
import IBoldAPI from '../type'
import fs from 'fs'
import pathCache from './pathCache'

function getCache(lead: IKommoAPI['leads']['status'][0]) {
    const cacheIsExists= fs.existsSync(pathCache)

    if (!cacheIsExists) {
        fs.writeFileSync(pathCache, JSON.stringify([], null, '  '))
    }

    const cache: IBoldAPI[] = JSON.parse(fs.readFileSync(pathCache).toString('utf-8') || '[]')

    const leadIsCached = cache.map(data => {
        if (lead.name === data.name) {
            return data
        }
    })[0]

    if (!leadIsCached) {
        return false
    } else {
        return leadIsCached
    }
}

export default getCache