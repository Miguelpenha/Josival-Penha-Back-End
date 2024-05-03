import styled from 'styled-components'

export const Container = styled.div`
    left: 2%;
    width: 6em;
    bottom: 45%;
    height: 6em;
    position: fixed;
    cursor: pointer;
    border-radius: 50%;
    z-index: 9999999999 !important;
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
    font-size: 1em;
    font-weight: bold;
    white-space: nowrap;
`

export const ContainerVideo = styled.div`
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    overflow: hidden !important;
    transform: translate(-50%, -50%);
`

export const Brand = styled.svg`
    top: 5%;
    left: 3%;
    width: 5.2em;
    display: none;
    position: absolute;
    z-index: 1000000001 !important;

    .background {
        fill: rgba(49, 49, 49, 0.4);
    }

    .text, .logo {
        fill: #FFFFFF;
    }
`

export const IconClose = styled.svg`
    top: 5%;
    right: 3%;
    width: 2.3em;
    fill: #FFFFFF;
    display: none;
    border-radius: 50%;
    position: absolute;
    z-index: 1000000001 !important;
    background-color: rgba(0, 0, 0, 0.4);
`

export const IconShare = styled.svg`
    right: 3%;
    bottom: 5%;
    width: 2.8em;
    fill: #ffffff;
    display: none;
    padding: 0.3em;
    border-radius: 50%;
    position: absolute;
    z-index: 1000000002 !important;
    background-color: rgba(0, 0, 0, 0.4);
`

export const ButtonCTA = styled.a`
    left: 3%;
    opacity: 0;
    bottom: 20%;
    width: 11em;
    height: 2.8em;
    display: none;
    padding: 0.5em;
    position: absolute;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    background-color: #0AD08C;
    transform: translateY(50px);
    z-index: 1000000002 !important;

    .icon {
        width: 1.5em;
        fill: #FFFFFF;
        margin-left: 0.5em;
    }

    .text {
        color: #FFFFFF;
        margin-left: 1em;
        font-weight: bold;
    }
`

export const Caption = styled.div`
    left: 3%;
    opacity: 0;
    bottom: 5%;
    width: 10em;
    height: 2.8em;
    display: none;
    color: #FFFFFF;
    font-size: 1em;
    position: absolute;
    z-index: 1000000002 !important;
`

export const Gradient = styled.div`
    bottom: 0%;
    width: 100%;
    height: 30%;
    background: none;
    position: absolute;
    border-radius: 0 0 15px 15px;
    z-index: 1000000001 !important;
`

export const Video = styled.video`
    width: 100%;
    height: auto;
    /* box-shadow: 0px 15px 50px 0px rgba(0, 0, 0, 0.5); */
`