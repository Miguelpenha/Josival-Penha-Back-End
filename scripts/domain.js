addEventListener('DOMContentLoaded', () => {
    let scriptVideo = document.createElement('script')

    scriptVideo.type = 'text/javascript'
    scriptVideo.crossOrigin = 'anonymous'
    scriptVideo.src = `{{domain}}/nyxel/video/page${window.location.pathname}`

    document.body.appendChild(scriptVideo)

    let oldDomain = window.document.location.href

    setInterval(() => {
        if (oldDomain != window.document.location.href) {
            document.body.removeChild(scriptVideo)

            scriptVideo = document.createElement('script')

            scriptVideo.type = 'text/javascript'
            scriptVideo.crossOrigin = 'anonymous'
            scriptVideo.src = `{{domain}}/nyxel/video/page${window.location.pathname}`

            document.body.appendChild(scriptVideo)

            window.document.getElementById('nyxel') && document.body.removeChild(window.document.getElementById('nyxel'))

            oldDomain = window.document.location.href
       }
    }, 100)
})