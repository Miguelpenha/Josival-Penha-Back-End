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

type actionSource = 'website' | 'physical_store'
type eventName = 'AddToCart' | 'Purchase' | 'Lead' | 'Other'

interface IUserData {
    ph: string
    country: string
}

interface IMetaAPI {
    event_time: number
    user_data: IUserData
    event_name?: eventName
    custom_data?: ICustomData
    action_source: actionSource
}

export default IMetaAPI