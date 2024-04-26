import React, { FC } from 'react'
import { Container, Message, MessageText, ContainerVideo, IconClose, IconContact, IconShare, Brand, Video } from './style'

interface IProps {
    url: string
    actionText: string
}

const VideoElement: FC<IProps> = ({ url, actionText }) => {
    return (
        <Container id="video-popup">
            <Message className="message">
                <MessageText className="text">{actionText}</MessageText>
            </Message>
            <ContainerVideo className="container-video">
                <IconClose id="icon-close" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </IconClose>
                <IconContact id="icon-contact" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g >
                        <rect width="512" height="512" rx="15%" fill="#73be62"></rect>
                        <path fill="#73be62" stroke="#ffffff" strokeWidth="26" d="M123 393l14-65a138 138 0 1150 47z"/>
                        <path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"/>
                    </g>
                </IconContact>
                <IconShare id="icon-share" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                    </g>
                    <g>
                        <path d="M21,11l-6-6v5H8c-2.76,0-5,2.24-5,5v4h2v-4c0-1.65,1.35-3,3-3h7v5L21,11z"/>
                    </g>
                </IconShare>
                <Brand id="brand" viewBox="0 0 106 51" xmlns="http://www.w3.org/2000/svg">
                    <path className="background" d="M0 51H106V0H0V51Z"/>
                    <path className="text" d="M5.32 37V13.492H6.112L21.448 31.132C22 31.756 22.504 32.38 22.96 33.004C23.44 33.604 23.692 33.916 23.716 33.94C23.668 33.364 23.644 32.236 23.644 30.556V13.636H25.3V37.144H24.508L8.884 19.216L6.904 16.804C6.952 17.284 6.976 18.412 6.976 20.188V37H5.32ZM40.4892 37H38.8692V28.648L30.0492 13.636H32.0292L38.8332 25.228C39.3612 26.284 39.6612 26.848 39.7332 26.92C39.8772 26.608 40.1772 26.056 40.6332 25.264L47.4372 13.636H49.3092L40.4892 28.72V37ZM51.2026 13.636H53.2186L59.4466 23.752L65.9626 13.636H67.7626L60.2746 25.084L67.7986 37H65.8186L59.1226 26.272L52.1386 37H50.3026L58.2946 24.904L51.2026 13.636ZM72.6794 37V13.636H83.5874V15.076H74.3354V23.572H82.6874V24.976H74.3354V35.488H83.9474V37H72.6794ZM90.5739 37V13.636H92.2299V35.488H102.958V37H90.5739Z"/>
                </Brand>
                <Video src={url} id="video" loop muted autoPlay playsInline/>
            </ContainerVideo>
        </Container>
    )
}

export default VideoElement