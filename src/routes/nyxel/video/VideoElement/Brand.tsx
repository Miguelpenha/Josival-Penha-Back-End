import React, { FC } from 'react'

const Brand: FC = props => {
    return (
        <svg {...props} id="brand" viewBox="0 0 117 40" xmlns="http://www.w3.org/2000/svg">
            <rect className="background" width="117" height="40" rx="5"/>
            <path className="logo" fillRule="evenodd" clipRule="evenodd" d="M14.3861 9.05987L16.6702 10.6546C20.7228 11.1869 24.0088 14.4699 24.3855 18.7106C24.7031 22.2856 22.8656 25.5551 19.9471 27.2354C19.6512 27.4058 19.3442 27.5598 19.0272 27.6962C18.7177 27.8293 18.3987 27.9456 18.0712 28.0438L19.6512 29.147C23.7045 27.4036 26.3699 23.2054 25.9582 18.5709C25.5389 13.8518 22.059 10.1405 17.6494 9.22017C17.3945 9.16698 17.1365 9.1231 16.8758 9.0889C16.1265 8.9906 15.3549 8.97218 14.5709 9.04184C14.5091 9.04733 14.4475 9.05334 14.3861 9.05987ZM11.2595 11.6493C11.5531 11.4905 11.8571 11.3475 12.1704 11.2216C12.5014 11.0886 12.8428 10.9747 13.1933 10.8814L11.5818 9.75617C7.39809 11.4367 4.62227 15.7064 5.04184 20.4291C5.47693 25.3266 9.20852 29.1387 13.8546 29.8721C14.1138 29.9131 14.376 29.9444 14.6406 29.9658C15.2263 30.0132 15.824 30.0119 16.4291 29.9582C16.5976 29.9432 16.7648 29.9243 16.9306 29.9017L14.7682 28.3919C10.5163 28.0471 7.00474 24.6821 6.61449 20.2894C6.28946 16.6307 8.22154 13.2921 11.2595 11.6493ZM15.5 23.8418C17.8979 23.8418 19.8418 21.8979 19.8418 19.5C19.8418 17.1021 17.8979 15.1582 15.5 15.1582C13.1021 15.1582 11.1582 17.1021 11.1582 19.5C11.1582 21.8979 13.1021 23.8418 15.5 23.8418ZM15.5 25.5786C18.8571 25.5786 21.5786 22.8571 21.5786 19.5C21.5786 16.1429 18.8571 13.4214 15.5 13.4214C12.1429 13.4214 9.42143 16.1429 9.42143 19.5C9.42143 22.8571 12.1429 25.5786 15.5 25.5786Z"/>
            <path className="text" d="M32.36 30V11.716H32.976L44.904 25.436C45.3333 25.9213 45.7253 26.4067 46.08 26.892C46.4533 27.3587 46.6493 27.6013 46.668 27.62C46.6307 27.172 46.612 26.2947 46.612 24.988V11.828H47.9V30.112H47.284L35.132 16.168L33.592 14.292C33.6293 14.6653 33.648 15.5427 33.648 16.924V30H32.36ZM59.7138 30H58.4538V23.504L51.5938 11.828H53.1338L58.4258 20.844C58.8365 21.6653 59.0698 22.104 59.1258 22.16C59.2378 21.9173 59.4711 21.488 59.8258 20.872L65.1178 11.828H66.5738L59.7138 23.56V30ZM68.0464 11.828H69.6144L74.4584 19.696L79.5264 11.828H80.9264L75.1024 20.732L80.9544 30H79.4144L74.2064 21.656L68.7744 30H67.3464L73.5624 20.592L68.0464 11.828ZM84.7506 30V11.828H93.2346V12.948H86.0386V19.556H92.5346V20.648H86.0386V28.824H93.5146V30H84.7506ZM98.6686 30V11.828H99.9566V28.824H108.301V30H98.6686Z"/>
        </svg>
    )
}

export default Brand