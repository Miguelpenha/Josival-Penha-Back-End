interface ICustomField {
    id: string
    name: string
    values: { value: string, enum: string }[]
}

interface ILead {
    id: string
    name: string
    price: string
    status_id: string
    custom_fields: ICustomField[]
}
  
interface IKommoAPI {
    leads: {
        status: ILead[]
    }
}

export default IKommoAPI