scriptGsap = window.document.querySelector('script[src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"]')

if (!scriptGsap) {
    scriptGsap = document.createElement('script')

    scriptGsap.src = 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js'
    document.body.appendChild(scriptGsap)
} else {
    scriptGsap = scriptGsap
}

if (scriptGsap) {
    makeVideo()
}

function closeVideo() {
    const video = document.querySelector('#video-popup #video')

    video.loop = true
    video.muted = true
    
    video.load()

    gsap.to('#video-popup .icon-close, #video-popup .icon-share', {
        duration: 0.2,
        display: 'none'
    })

    gsap.to('#video-popup>.container-video', {
        top: '0',
        left: '0',
        duration: 0.5,
        transform: 'none'
    })

    gsap.to('#video-popup #video', {
        width: '100%',
        height: 'auto',
        zIndex: '1000',
        borderRadius: '0'
    })

    gsap.to('#video-popup #video', {
        left: '0%',
        transform: 'none',
        position: 'block'
    })

    gsap.to('#video-popup', {
        top: '80vh',
        left: '1%',
        bottom: '1%',
        width: '112px',
        height: '112px',
        borderRadius: '50%'
    })
}

function makeVideo() {
    document.body.insertAdjacentHTML('beforeend', '{{styleElement}}')
    document.body.insertAdjacentHTML('beforeend', '{{videoElement}}')

    const container = document.getElementById('video-popup')
    const iconClose = document.querySelector('#video-popup .icon-close')
    const iconShare = document.querySelector('#video-popup .icon-share')
    const video = document.querySelector('#video-popup #video')

    container.onclick = ev => {
        if (video.muted && ev.target.id == 'video') {
            video.loop = false
            video.muted = false

            video.load()

            gsap.to('#video-popup #video', {
                width: 'auto'
            })

            gsap.to('#video-popup', {
                top: '0%',
                left: '0%',
                delay: 0.2,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                borderRadius: '0',
                alignItems: 'center',
                justifyContent: 'center'
            })

            gsap.to('#video-popup>.container-video', {
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            })

            gsap.to('#video-popup #video', {
                delay: 0.1,
                left: '50%',
                height: '90%',
                zIndex: '1001',
                borderRadius: '20px',
                onComplete() {
                    gsap.to('#video-popup .icon-close, #video-popup .icon-share', {
                        display: 'block'
                    })
                }
            })
        } else {
            if (ev.target.id == 'video-popup') {
                closeVideo()
            }
        }
    }

    iconClose.onclick = () => closeVideo()

    iconShare.onclick = () => navigator.share({
        url: window.location.href
    })

    video.onclick = () => {
        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }
}