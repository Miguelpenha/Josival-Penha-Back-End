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

function makeVideo() {
    document.body.insertAdjacentHTML('beforeend', '{{styleElement}}')
    document.body.insertAdjacentHTML('beforeend', '{{videoElement}}')

    const containerVideo = document.getElementsByClassName('container-video')[0]
    const video = document.getElementById('video')

    containerVideo.onclick = ev => {
        if (video.muted) {
            video.loop = false
            video.muted = false
            video.controls = true

            setTimeout(() => {
                video.load()
            }, 100)

            gsap.to('.container-video', {
                top: '0%',
                left: '0%',
                width: '100%',
                height: '100%',
                display: 'flex',
                borderRadius: '0',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
            })

            gsap.to('#video', {
                left: '50%',
                width: 'auto',
                height: '80%',
                zIndex: '1001'
            })
        } else {
            if (ev.target.id != 'video') {
                video.loop = true
                video.muted = true
                video.controls = false
                
                setTimeout(() => {
                    video.load()
                }, 100)

                gsap.to('.container-video', {
                    left: '1%',
                    top: '80vh',
                    bottom: '1%',
                    width: '7em',
                    height: '7em',
                    borderRadius: '50%',
                    backgroundColor: 'none'
                })

                gsap.to('#video', {
                    left: '0%',
                    width: '100%',
                    height: 'auto',
                    zIndex: '1000',
                    transform: 'none',
                    position: 'block'
                })
            }
        }
    }
}