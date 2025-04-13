interface IRoute {
    url: string
    videoURL: string
}

type ICTAType = 'whatsapp' | 'reservation' | 'product'

interface ICompany {
    name: string
    color: string
    scale?: number
    hostURL: string
    caption?: string
    routes: IRoute[]
    folderURL: String
    actionText: string
    bottom?: {
        mobile?: number
        desktop?: number
    }
    cta: {
        url: string
        text: string
        type: ICTAType
        internal?: boolean
    }
}

export default ICompany