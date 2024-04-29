addEventListener('loadstart', () => {
    console.log('>> pegou', window.location.pathname)
    let scriptVideo = document.createElement('script')

    scriptVideo.type = 'text/javascript'
    scriptVideo.crossOrigin = 'anonymous'
    scriptVideo.src = `{{domain}}/nyxel/video/page${window.location.pathname}`

    document.body.appendChild(scriptVideo)

    let oldDomain = window.document.location.pathname

    setInterval(() => {
        if (oldDomain != window.document.location.pathname) {
            document.body.removeChild(scriptVideo)

            scriptVideo = document.createElement('script')

            scriptVideo.type = 'text/javascript'
            scriptVideo.crossOrigin = 'anonymous'
            scriptVideo.src = `{{domain}}/nyxel/video/page${window.location.pathname}`

            document.body.appendChild(scriptVideo)

            window.document.getElementById('nyxel') && document.body.removeChild(window.document.getElementById('nyxel'))

            oldDomain = window.document.location.pathname
       }
    }, 100)
})