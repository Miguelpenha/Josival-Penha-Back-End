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
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 15px 15px 25px 5px rgba(0, 0, 0, 0.4);
`

export const ContainerVideo = styled.div`
    width: auto;
    height: 100%;
    position: absolute;
`

export const IconClose = styled.svg`
    top: 2%;
    right: 2%;
    width: 3em;
    fill: #ffffff;
    z-index: 1002;
    display: none;
    position: absolute;
`

export const IconShare = styled.svg`
    right: 2%;
    width: 3em;
    bottom: 20%;
    fill: #ffffff;
    z-index: 1002;
    display: none;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.6);
`

export const Video = styled.video`
    width: 100%;
    height: auto;
    box-shadow: 0px 15px 50px 0px rgba(0, 0, 0, 0.5);
`