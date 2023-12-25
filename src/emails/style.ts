import { CSSProperties } from 'react'
import theme from './theme'

export const body: CSSProperties = {
    backgroundColor: theme.background
}

export const container: CSSProperties = {
    display: 'flex',
    backgroundColor: theme.background
}

export const header: CSSProperties = {
    padding: '1.5em',
    backgroundColor: theme.primary
}

export const image: CSSProperties = {
    width: '60%',
    margin: 'auto'
}

export const title: CSSProperties = {
    margin: '1em',
    color: theme.color,
    textAlign: 'center'
}

export const sectionTexts: CSSProperties = {
    width: '90%',
    padding: '0 1em',
    backgroundColor: theme.background
}

export const text: CSSProperties = {
    margin: '0.8em',
    fontSize: '1.2em',
    minHeight: '10px',
    lineHeight: '20px',
    color: theme.color
}

export const sectionButton: CSSProperties = {
    textAlign: 'center'
}

export const button: CSSProperties = {
    margin: 'auto',
    marginTop: '2em',
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginRight: 'auto',
    marginBottom: '2em',
    borderRadius: '15px',
    color: theme.secondary,
    backgroundColor: theme.primary
}