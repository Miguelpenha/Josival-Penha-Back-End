import ICompany from './company'

const companies: ICompany[] = [
    {
        color: '#00AFEF',
        name: 'Josival Penha',
        actionText: 'Saber mais 👆',
        hostURL: 'https://josivalpenha.com',
        folderURL: 'josival-penha-1515fae3-8ca1-46d0-922e-cdf47e8909ca',
        cta: {
            type: 'whatsapp',
            text: 'Fale agora',
            url: 'https://api.whatsapp.com/send?phone=558194997501'
        },
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
        color: '#ED2C2C',
        name: 'Sonetto Produções',
        actionText: 'Veja mais 👆',
        hostURL: 'https://sonettoproducoes.com',
        folderURL: 'sonetto-producoes-87c2ed99-4b0c-4060-a57a-03796901c0f2',
        cta: {
            type: 'whatsapp',
            text: 'Fale agora',
            url: 'https://api.whatsapp.com/send?phone=5581991426351&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20evento'
        },
        routes: [
            {
                url: '/',
                videoURL: 'video-fdcc496c-876d-41f6-8201-91a0cc1a301c.mp4'
            }
        ]
    },
    {
        color: '#000000',
        actionText: 'Saber mais 👆',
        name: 'Hotel Pedra do Rodeadouro',
        hostURL: 'https://www.engenhopedrarodeadouro.com.br/',
        folderURL: 'hotel-pedra-do-rodeadouro-46ce45ae-275b-4f82-a02b-0544b2daecc2',
        cta: {
            type: 'whatsapp',
            text: 'Fale agora',
            url: 'https://wa.me/5581997253131?text=Ol%C3%A1%2C+vi+o+v%C3%ADdeo+no+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+hotel'
        },
        routes: [
            {
                url: '/',
                videoURL: 'video-ec6cc474-d5ff-4641-b8b3-081d170dc141.mp4'
            }
        ]
    },
    {
        scale: 0.8,
        color: '#000000',
        name: 'Fity Hotel',
        actionText: 'Saber mais 👆',
        hostURL: 'https://blog.fityhotel.com.br/',
        folderURL: 'fity-hotel-64e5e779-47b8-4d3f-90d1-6d04bdb5da47',
        cta: {
            type: 'reservation',
            text: 'Reserve agora',
            url: 'https://hbook.hsystem.com.br/booking?companyId=5abd1f9ec19a3b520cfc66a8&utm_source=nyxel&utm_medium=video&utm_campaign=blog-nyxel'
        },
        routes: [
            {
                url: '/*',
                videoURL: 'video-ac3485c7-9fee-4389-be69-59bfe5504330.mp4'
            }
        ]
    },
    {
        scale: 0.8,
        color: '#8b5642',
        name: 'Rustic Home Decor',
        actionText: 'Saber mais 👆',
        hostURL: 'https://www.rustichomedecor.com.br/',
        folderURL: 'rustic-home-decor-0050c16c-77ea-4b91-9c23-ad7f2a94efe4',
        cta: {
            type: 'product',
            text: 'Ver produtos',
            url: 'https://www.rustichomedecor.com.br/categoria-produto/decoracao/'
        },
        routes: [
            {
                url: '/',
                videoURL: 'video-58774a2e-716f-46d4-a665-ad2538c9336e.mov'
            }
        ]
    }
]

export default companies
