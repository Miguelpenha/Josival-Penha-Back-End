import styled from 'styled-components'

export const Container = styled.div`
    left: 2%;
    bottom: 2%;
    width: 7em;
    height: 7em;
    z-index: 1000;
    position: fixed;
    cursor: pointer;
    object-fit: cover;
    border-radius: 50%;
    background-color: ${props => props.theme.color};
    box-shadow: 15px 15px 25px 5px rgba(0, 0, 0, 0.4);
`

export const Message = styled.div`
    top: 50%;
    width: 0;
    left: 95%;
    opacity: 0;
    padding: 0.5em;
    position: absolute;
    transform: translateY(-50%);
    border-radius: 0 20px 20px 0;
    background-color: ${props => props.theme.color};
`

export const MessageText = styled.span`
    opacity: 0;
    color: #FFFFFF;
    font-size: 1em;
    font-weight: bold;
    white-space: nowrap;
`

export const ContainerVideo = styled.div`
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
`

export const IconClose = styled.svg`
    top: 2%;
    right: 3%;
    width: 3em;
    fill: #ffffff;
    z-index: 1002;
    display: none;
    position: absolute;
`

export const IconContact = styled.svg`
    right: 3%;
    width: 3em;
    bottom: 50%;
    display: none;
    fill: #ffffff;
    z-index: 1002;
    position: absolute;
    transform: scale(0.8);
`

export const IconShare = styled.svg`
    right: 3%;
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