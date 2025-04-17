import ICreated from './created'

export interface IRoute {
    _id: string
    url: string
    videoURL: string
    created: ICreated
}

type ICTAType = 'whatsapp' | 'reservation' | 'product'

export interface ICTA {
    url: string
    text: string
    type: ICTAType
    internal?: boolean
}

interface ICompany {
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
    cta: ICTA
}

export default ICompany