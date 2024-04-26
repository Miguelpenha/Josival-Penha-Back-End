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

function initialLoadVideo() {
    gsap.to('#video-popup>.container-video', {
        width: '80%',
        height: '80%',
        duration: 0.5,
        onComplete() {
            gsap.to('#video-popup>.message', {
                opacity: 1
            })

            gsap.to('#video-popup>.message', {
                delay: 0.2,
                duration: 0.8,
                width: '7.5em',
                onComplete() {
                    gsap.to('#video-popup>.message>.text', {
                        opacity: 1
                    })
                }
            })
        }
    })
}

function openVideo() {
    video.loop = false
    video.muted = false

    video.load()

    gsap.to('#video-popup #video', {
        width: 'auto'
    })

    gsap.to('#video-popup>.message', {
        opacity: 0
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
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    })

    gsap.to('#video-popup>.container-video', {
        top: '55%',
        width: 'auto',
        borderRadius: '0'
    })

    gsap.to('#video-popup #video', {
        delay: 0.1,
        left: '50%',
        height: '90%',
        zIndex: '1001',
        borderRadius: '20px',
        onComplete() {
            gsap.to('#video-popup .icon', {
                display: 'block',
                transform: 'scale(1)'
            })

            gsap.to('#video-popup #brand', {
                opacity: 1,
                display: 'block'
            })
        }
    })
}

function closeVideo() {
    video.loop = true
    video.muted = true
    
    video.load()

    gsap.to('#video-popup>.message', {
        opacity: 1
    })

    gsap.to('#video-popup .icon', {
        duration: 0.2,
        display: 'none',
        transform: 'scale(0.8)'
    })

    gsap.to('#video-popup #brand', {
        opacity: 0.5,
        duration: 0.2,
        display: 'none'
    })

    gsap.to('#video-popup>.container-video', {
        top: '50%',
        width: '80%',
        duration: 0.5,
        borderRadius: '50%'
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
        left: '2%',
        top: '78vh',
        bottom: '2%',
        width: '112px',
        height: '112px',
        borderRadius: '50%',
        backgroundColor: '{{color}}'
    })
}

function makeVideo() {
    document.body.insertAdjacentHTML('beforeend', '{{styleElement}}')
    document.body.insertAdjacentHTML('beforeend', '{{videoElement}}')

    const container = document.getElementById('video-popup')
    const iconClose = document.querySelector('#video-popup #icon-close')
    const iconContact = document.querySelector('#video-popup #icon-contact')
    const iconShare = document.querySelector('#video-popup #icon-share')
    const video = document.querySelector('#video-popup #video')

    setTimeout(initialLoadVideo, 200)

    container.onclick = ev => {
        if (video.muted && (ev.target.id == 'video' || ev.target.className.includes('message') || ev.target.className.includes('text'))) {
            openVideo()
        } else {
            if (ev.target.id == 'video-popup') {
                closeVideo()
            }
        }
    }

    iconClose.onclick = ev => {
        ev.stopPropagation()

        closeVideo()
    }

    iconContact.onclick = () => window.open('{{contactURL}}')

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