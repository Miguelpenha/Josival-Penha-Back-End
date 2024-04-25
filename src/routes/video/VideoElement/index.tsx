import React, { FC } from 'react'
import { Container, ContainerVideo, IconClose, IconShare, Video } from './style'

interface IProps {
    url: string
}

const VideoElement: FC<IProps> = ({ url }) => {
    return (
        <Container id="video-popup">
            <ContainerVideo className="container-video">
                <IconClose className="icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
                </IconClose>
                <IconShare className="icon-share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
                </IconShare>
                <Video src={url} id="video" loop muted autoPlay playsInline/>
            </ContainerVideo>
        </Container>
    )
}

export default VideoElement