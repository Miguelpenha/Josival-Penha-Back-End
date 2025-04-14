import React, { FC } from 'react'
import ICompany from '../company'
import { Container, Message, MessageText, ContainerVideo, ProgressBar, Brand, IconClose, IconShare, Caption, Gradient, Video } from './style'
import ButtonWhatsApp from './ButtonWhatsApp'
import ButtonReservation from './ButtonReservation'
import ButtonProduct from './ButtonProduct'

interface IProps {
    urlVideo: string
    company: ICompany
}

const VideoElement: FC<IProps> = ({ company, urlVideo }) => {
    return (
        <Container id="nyxel" $bottom={company?.bottom} $scale={company.scale || 1}>
            <Message className="message">
                <MessageText className="text">{company.actionText}</MessageText>
            </Message>
            <ContainerVideo className="container-video">
                <ProgressBar className="progress-bar"/>
                <Brand/>
                <IconClose id="icon-close" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </IconClose>
                <IconShare id="icon-share" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
                </IconShare>
                {company.cta.type === 'whatsapp' ? <ButtonWhatsApp cta={company.cta}/> : company.cta.type === 'reservation' ? <ButtonReservation cta={company.cta}/> : company.cta.type === 'product' && <ButtonProduct cta={company.cta}/>}
                {company.caption && <Caption id="caption">{company.caption}</Caption>}
                <Gradient id="gradient"/>
                <Video id="video" loop muted autoPlay playsInline disablePictureInPicture preload="metadata">
                    <source src={urlVideo+'#t=0.1'} type="video/mp4"/>
                </Video>
            </ContainerVideo>
        </Container>
    )
}

export default VideoElement