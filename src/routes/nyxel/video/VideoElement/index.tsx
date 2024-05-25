import React, { FC } from 'react'
import { Container, Message, MessageText, ContainerVideo, Brand, IconClose, IconShare, ButtonCTA, Caption, Gradient, Video } from './style'

interface IProps {
    caption: string
    urlVideo: string
    urlContact: string
    actionText: string
}

const VideoElement: FC<IProps> = ({ urlVideo, actionText, urlContact, caption }) => {
    return (
        <Container id="nyxel">
            <Message className="message">
                <MessageText className="text">{actionText}</MessageText>
            </Message>
            <ContainerVideo className="container-video">
                <Brand/>
                <IconClose id="icon-close" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </IconClose>
                <IconShare id="icon-share" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
                </IconShare>
                <ButtonCTA id="cta" href={urlContact}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 25 26">
                        <path d="M18.25 15.0312C18 14.9062 16.375 14.1562 16.125 14.0312C15.875 13.9062 15.625 13.9062 15.375 14.1562C15.125 14.4062 14.625 15.1562 14.375 15.4062C14.25 15.6562 14 15.6562 13.75 15.5312C12.875 15.1562 12 14.6562 11.25 14.0312C10.625 13.4062 10 12.6562 9.5 11.9062C9.375 11.6562 9.5 11.4062 9.625 11.2812C9.75 11.1562 9.875 10.9062 10.125 10.7812C10.25 10.6562 10.375 10.4062 10.375 10.2812C10.5 10.1562 10.5 9.90625 10.375 9.78125C10.25 9.65625 9.625 8.15625 9.375 7.53125C9.25 6.65625 9 6.65625 8.75 6.65625C8.625 6.65625 8.375 6.65625 8.125 6.65625C7.875 6.65625 7.5 6.90625 7.375 7.03125C6.625 7.78125 6.25 8.65625 6.25 9.65625C6.375 10.7812 6.75 11.9062 7.5 12.9062C8.875 14.9062 10.625 16.5312 12.75 17.5312C13.375 17.7812 13.875 18.0312 14.5 18.1562C15.125 18.4062 15.75 18.4062 16.5 18.2812C17.375 18.1562 18.125 17.5312 18.625 16.7812C18.875 16.2812 18.875 15.7812 18.75 15.2812C18.75 15.2812 18.5 15.1562 18.25 15.0312ZM21.375 3.65625C16.5 -1.21875 8.625 -1.21875 3.75 3.65625C-0.25 7.65625 -1 13.7812 1.75 18.6562L0 25.0312L6.625 23.2812C8.5 24.2812 10.5 24.7812 12.5 24.7812C19.375 24.7812 24.875 19.2812 24.875 12.4062C25 9.15625 23.625 6.03125 21.375 3.65625ZM18 21.1562C16.375 22.1562 14.5 22.7812 12.5 22.7812C10.625 22.7812 8.875 22.2812 7.25 21.4062L6.875 21.1562L3 22.1562L4 18.4062L3.75 18.0312C0.75 13.0312 2.25 6.78125 7.125 3.65625C12 0.53125 18.25 2.15625 21.25 6.90625C24.25 11.7812 22.875 18.1562 18 21.1562Z"/>
                    </svg>
                    <span className="text">Fale agora</span>
                </ButtonCTA>
                {caption && <Caption id="caption">{caption}</Caption>}
                <Gradient id="gradient"/>
                <Video id="video" loop muted autoPlay playsInline disablePictureInPicture preload="metadata">
                    <source src={urlVideo+'#t=0.1'} type="video/mp4"/>
                </Video>
            </ContainerVideo>
        </Container>
    )
}

export default VideoElement