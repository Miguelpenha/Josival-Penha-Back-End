import React, { FC } from 'react'
import { Container, Video } from './style'

interface IProps {
    url: string
}

const VideoElement: FC<IProps> = ({ url }) => {
    return (
        <Container className="container-video">
            <Video src={url} id="video" loop muted autoPlay playsInline/>
        </Container>
    )
}

export default VideoElement