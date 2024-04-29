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
    gsap.to('#nyxel>.container-video', {
        width: '90%',
        height: '90%',
        duration: 0.5,
        onComplete() {
            gsap.to('#nyxel>.message', {
                opacity: 1
            })

            gsap.to('#nyxel>.message', {
                delay: 0.2,
                duration: 0.8,
                width: '6.5em',
                onComplete() {
                    gsap.to('#nyxel>.message>.text', {
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
    
    gsap.to('#nyxel #video', {
        width: 'auto'
    })

    gsap.to('#nyxel>.message', {
        opacity: 0
    })

    gsap.to('body', {
        overflow: 'hidden'
    })

    gsap.to('#nyxel', {
        top: '0%',
        left: '0%',
        delay: 0.3,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        borderRadius: '0',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    })

    gsap.to('#nyxel>.container-video', {
        top: '50%',
        width: 'auto',
        height: '85%',
        borderRadius: '0'
    })

    gsap.to('#nyxel #video', {
        delay: 0.1,
        left: '50%',
        height: '100%',
        borderRadius: '20px',
        zIndex: '1000000001 !important',
        onComplete() {
            gsap.to('#nyxel .icon', {
                display: 'block',
                transform: 'scale(1)'
            })

            gsap.to('#nyxel #brand', {
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

    gsap.to('body', {
        overflow: 'auto'
    })

    gsap.to('#nyxel>.message', {
        opacity: 1
    })

    gsap.to('#nyxel .icon', {
        duration: 0.1,
        display: 'none',
        transform: 'scale(0.8)'
    })

    gsap.to('#nyxel #brand', {
        opacity: 0.5,
        duration: 0.1,
        display: 'none'
    })

    gsap.to('#nyxel>.container-video', {
        top: '50%',
        width: '90%',
        height: '90%',
        duration: 0.5,
        borderRadius: '50%'
    })

    gsap.to('#nyxel #video', {
        width: '100%',
        height: 'auto',
        borderRadius: '0',
        zIndex: '1000000001 !important'
    })

    gsap.to('#nyxel #video', {
        left: '0%',
        transform: 'none',
        position: 'block'
    })

    gsap.to('#nyxel', {
        left: '2%',
        top: '38vh',
        bottom: '2%',
        width: '96px',
        height: '96px',
        borderRadius: '50%',
        backgroundColor: '{{color}}'
    })
}

function makeVideo() {
    document.body.insertAdjacentHTML('beforeend', '{{styleElement}}')
    document.body.insertAdjacentHTML('beforeend', '{{videoElement}}')

    const container = document.getElementById('nyxel')
    const iconClose = document.querySelector('#nyxel #icon-close')
    const iconContact = document.querySelector('#nyxel #icon-contact')
    const iconShare = document.querySelector('#nyxel #icon-share')
    const video = document.querySelector('#nyxel #video')

    setTimeout(initialLoadVideo, 200)

    container.onclick = ev => {
        if (video.muted && (ev.target.id == 'video' || ev.target.className.includes('message') || ev.target.className.includes('text'))) {
            openVideo()
        } else {
            if (ev.target.id == 'nyxel') {
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