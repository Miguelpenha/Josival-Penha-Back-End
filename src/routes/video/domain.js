addEventListener('DOMContentLoaded', () => {
    let scriptVideo = document.createElement('script')

    scriptVideo.type = 'text/javascript'
    scriptVideo.crossOrigin = 'anonymous'
    scriptVideo.src = `{{domain}}/video/page${window.location.pathname}`

    document.body.appendChild(scriptVideo)

    let oldDomain = window.document.location.href

    setInterval(() => {
        if (oldDomain != window.document.location.href) {
            document.body.removeChild(scriptVideo)

            scriptVideo = document.createElement('script')

            scriptVideo.type = 'text/javascript'
            scriptVideo.crossOrigin = 'anonymous'
            scriptVideo.src = `{{domain}}/video/page${window.location.pathname}`

            document.body.appendChild(scriptVideo)

            window.document.getElementsByClassName('container-video')[0] && document.body.removeChild(window.document.getElementsByClassName('container-video')[0])

            oldDomain = window.document.location.href
       }
    }, 100)
})