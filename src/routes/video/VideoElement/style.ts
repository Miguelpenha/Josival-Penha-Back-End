import styled from 'styled-components'

export const Container = styled.div`
    left: 1%;
    bottom: 1%;
    width: 7em;
    height: 7em;
    z-index: 1000;
    position: fixed;
    cursor: pointer;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
`

export const Video = styled.video`
    width: 100%;
    height: auto;
`