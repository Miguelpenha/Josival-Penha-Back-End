interface IRoute {
    url: string
    videoURL: string
}

interface ICompany {
    name: string
    color: string
    caption: string
    hostURL: string
    routes: IRoute[]
    folderURL: string
    actionText: string
    contactURL: string
}

export default ICompany