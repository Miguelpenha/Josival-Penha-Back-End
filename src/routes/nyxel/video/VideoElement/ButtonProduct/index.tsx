import React, { FC } from 'react'
import ICompany from '../../../../../types/company'
import { Button } from './style'

interface IProps {
    cta: ICompany['cta']
}

const ButtonProduct: FC<IProps> = ({ cta }) => {
    return (
        <Button id="cta" href={cta.url} target={cta.internal ? '_self' : '_blank'}>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                    <rect fill="none" height="24" width="24"/>
                    <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"/>
                </g>
            </svg>
            <span className="text">{cta.text}</span>
        </Button>
    )
}

export default ButtonProduct