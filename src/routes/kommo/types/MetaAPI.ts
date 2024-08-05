interface IContent {
    id: string
    quantity: number
}

type currency = 'brl'

interface ICustomData {
    value: number
    currency: currency
    contents: IContent[]
}

type eventName = 'Purchase' | 'Lead' | 'Other'
type actionSource = 'website' | 'offline'

interface IUserData {
    ph: string
}

interface IMetaAPI {
    event_time: number
    user_data: IUserData
    event_name?: eventName
    custom_data?: ICustomData
    action_source: actionSource
}

export default IMetaAPI