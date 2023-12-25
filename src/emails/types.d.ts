interface ITheme {
    color: string
    primary: string
    secondary: string
    background: string
}

export interface IProps {
    text: string
    title: string
    action: {
        text: string
        link: string
    }
}