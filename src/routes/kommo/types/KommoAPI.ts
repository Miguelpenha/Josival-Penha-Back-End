interface ILead {
    id: string
    name: string
    price: string
    status_id: string
}
  
interface IKommoAPI {
    leads: {
        status: ILead[]
    }
}

export default IKommoAPI