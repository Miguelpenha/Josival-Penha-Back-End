interface IRoute {
    url: string
    videoURL: string
}

interface ICompany {
    name: string
    hostURL: string
    routes: IRoute[]
    folderURL: string
}

export default ICompany