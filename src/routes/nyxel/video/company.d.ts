interface IRoute {
    url: string
    videoURL: string
}

type ICTAType = 'whatsapp' | 'reservation'

interface ICompany {
    name: string
    color: string
    scale?: number
    hostURL: string
    caption?: string
    routes: IRoute[]
    folderURL: string
    actionText: string
    cta: {
        url: string
        text: string
        type: ICTAType
    }
}

export default ICompany