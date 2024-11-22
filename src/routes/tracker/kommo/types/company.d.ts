interface IStatusIDs {
    Purchase: string
    AddToCart: string
}

interface ICompany {
    id: string
    datasetID: string
    accessToken: string
    statusIDs: IStatusIDs
}

export default ICompany