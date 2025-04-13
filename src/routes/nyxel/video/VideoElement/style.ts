import styled from 'styled-components'
import BrandRaw from './Brand'

interface IContainer {
    $scale: number
    $bottom?: {
        mobile?: number
        desktop?: number
    }
}

export const Container = styled.div<IContainer>`
    left: 2%;
    width: 6em;
    height: 6em;
    position: fixed;
    cursor: pointer;
    border-radius: 50%;
    transition-duration: 0.1s;
    z-index: 9999999999 !important;
    transition-timing-function: linear;
    transform: scale(${props => props.$scale});
    background-color: ${props => props.theme.color};
    box-shadow: 5px 8px 15px 2px rgba(0, 0, 0, 0.4);
    bottom: ${props => props?.$bottom?.desktop || 45}%;

    @media screen and (max-width: 900px) {
        bottom: ${props => props?.$bottom?.mobile || 45}%;
    }
`

export const Message = styled.div`
    top: 50%;
    left: 95%;
    opacity: 0;
    padding: 0.3em;
    width: fit-content;
    position: absolute;
    transform-origin: 0% 50%;
    border-radius: 0 20px 20px 0;
    transform: translateY(-50%) scaleX(0);
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

export const Brand = styled(BrandRaw)`
    top: 5%;
    left: 3%;
    width: 4.2em;
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

export const Caption = styled.div`
    left: 3%;
    opacity: 0;
    bottom: 5%;
    width: 11em;
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