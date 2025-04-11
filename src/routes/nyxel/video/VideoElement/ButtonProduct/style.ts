import styled from 'styled-components'

export const Button = styled.a`
    left: 3%;
    opacity: 0;
    bottom: 15%;
    width: 11em;
    height: 2.8em;
    display: none;
    padding: 0.5em;
    position: absolute;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    background-color: #000000;
    transform: translateY(50px);
    z-index: 1000000002 !important;
    text-decoration: none !important;

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