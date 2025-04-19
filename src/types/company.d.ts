import ICreated from './created'

type ICTAType = 'whatsapp' | 'reservation' | 'product'

export interface ICTA {
    url: string
    text: string
    type: ICTAType
    internal?: boolean
}

export interface IRoute {
    _id: string
    url: string
    videoURL: string
    loading?: boolean
    created: ICreated
}

interface ICompany {
    cta: ICTA
    _id: string
    name: string
    color: string
    scale?: number
    hostURL: string
    caption?: string
    routes: IRoute[]
    folderURL: string
    created: ICreated
    actionText: string
    bottom?: {
        mobile?: number
        desktop?: number
    }
}

export default ICompany