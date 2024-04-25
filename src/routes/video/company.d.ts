interface IRoute {
    url: string
    videoURL: string
}

interface ICompany {
    name: string
    color: string
    hostURL: string
    routes: IRoute[]
    folderURL: string
    textAction: string
    contactURL: string
}

export default ICompany