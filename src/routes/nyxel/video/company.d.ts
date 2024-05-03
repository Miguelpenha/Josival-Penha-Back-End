interface IRoute {
    url: string
    videoURL: string
}

interface ICompany {
    name: string
    color: string
    hostURL: string
    caption?: string
    routes: IRoute[]
    folderURL: string
    actionText: string
    contactURL: string
}

export default ICompany