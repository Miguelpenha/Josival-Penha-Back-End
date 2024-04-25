import ICompany from './company'

const companies: ICompany[] = [
    {
        color: '#00afef',
        name: 'Josival Penha',
        textAction: 'Saber mais 👆',
        hostURL: 'https://josivalpenha.com',
        contactURL: 'https://api.whatsapp.com/send?phone=558194997501',
        folderURL: 'josival-penha-1515fae3-8ca1-46d0-922e-cdf47e8909ca',
        routes: [
            {
                url: '/',
                videoURL: 'video-5efa8025-2e01-4cfc-a33d-386ce3695e31.mp4'
            },
            {
                url: '/blog',
                videoURL: 'video-blog-d6659ecc-8dcb-4e4b-a6a9-df965ce55352.mp4'
            }
        ]
    },
    {
        color: '#a9c16a',
        textAction: 'Saber mais 👆',
        name: 'Hotel Pedra do Rodeadouro',
        hostURL: 'https://www.engenhopedrarodeadouro.com.br',
        contactURL: 'https://www.engenhopedrarodeadouro.com.br',
        folderURL: 'hotel-pedra-do-rodeadouro-46ce45ae-275b-4f82-a02b-0544b2daecc2',
        routes: [
            {
                url: '/',
                videoURL: 'video-ec6cc474-d5ff-4641-b8b3-081d170dc141.mp4'
            }
        ]
    }
]

export default companies