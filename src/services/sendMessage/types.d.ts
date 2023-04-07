interface IContact {
    input: string
    wa_id: string
}

interface IMessage {
    id: string
}

export interface IResponseMessage {
    success?: boolean
    contacts?: IContact[]
    messages?: IMessage[]
    messaging_product?: 'whatsapp'
}

interface IParameter {
    text?: string
    type: 'text' | 'image'
    image?: {
        link: string
    }
}

interface IComponent {
    index?: number
    sub_type?: 'URL'
    parameters: IParameter[]
    type: 'header' | 'body' | 'button'
}

interface IRow {
    id: string
    title: string
    description: string
}

interface ISection {
    rows: IRow[]
    title: string
}

export interface IRequestMessage {
    to: string
    status?: 'read'
    message_id?: string
    messaging_product: 'whatsapp'
    recipient_type?: 'individual'
    type?: 'text' | 'image' | 'template' | 'location' | 'reaction' | 'interactive'
    image?: {
        link: string
    }
    body?: {
        text: string
    }
    context?: {
        message_id: string
    }
    text?: {
        body: string
        preview_url: boolean
    }
    reaction?: {
        emoji: string
        message_id: string
    }
    location?: {
        name: string
        address: string
        latitude: number
        longitude: number
    }
    template?: {
        name: string
        components: IComponent[]
        language: {
            code: 'pt_BR'
        }
    }
    interactive?: {
        type: 'list'
        header: {
            type: 'text',
            text: string
        }
        body: {
            text: string
        }
        footer: {
            text: string
        }
        action: {
            button: string
            sections: ISection[]
        }
    }
}