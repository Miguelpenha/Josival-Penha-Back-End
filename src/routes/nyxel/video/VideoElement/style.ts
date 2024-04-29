import styled from 'styled-components'

export const Container = styled.div`
    left: 2%;
    width: 6em;
    bottom: 25%;
    height: 6em;
    z-index: 999999;
    position: fixed;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${props => props.theme.color};
    box-shadow: 5px 8px 15px 2px rgba(0, 0, 0, 0.4);
`

export const Message = styled.div`
    top: 50%;
    width: 0;
    left: 95%;
    opacity: 0;
    padding: 0.2em;
    position: absolute;
    transform: translateY(-50%);
    border-radius: 0 20px 20px 0;
    background-color: ${props => props.theme.color};
`

export const MessageText = styled.span`
    opacity: 0;
    color: #FFFFFF;
    font-size: 0.8em;
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
    width: 2.5em;
    fill: #FFFFFF;
    display: none;
    z-index: 1000001;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
`

export const IconContact = styled.svg`
    right: 3%;
    bottom: 45%;
    width: 2.8em;
    display: none;
    z-index: 1000001;
    border-radius: 50%;
    position: absolute;
    transform: scale(0.8);
    background-color: #73be62;
`

export const IconShare = styled.svg`
    right: 3%;
    bottom: 30%;
    width: 2.8em;
    fill: #ffffff;
    display: none;
    padding: 0.3em;
    z-index: 1000001;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
`

export const Brand = styled.svg`
    left: 3%;
    width: 5em;
    bottom: 4%;
    opacity: 0.5;
    display: none;
    z-index: 1000001;
    position: absolute;

    .background {
        fill: rgba(49, 49, 49, 0.3);
    }

    .text {
        fill: #FFFFFF;
    }
`

export const Video = styled.video`
    width: 100%;
    height: auto;
    /* box-shadow: 0px 15px 50px 0px rgba(0, 0, 0, 0.5); */
`