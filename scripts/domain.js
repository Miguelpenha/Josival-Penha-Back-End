setTimeout(() => {
    let scriptVideo = document.createElement('script')

    scriptVideo.type = 'text/javascript'
    scriptVideo.crossOrigin = 'anonymous'
    scriptVideo.src = `{{domain}}/nyxel/video/page${window.location.pathname}`

    document.body.appendChild(scriptVideo)

    let oldDomain = window.document.location.pathname

    const cookies = document.cookie.split('; ')

    const userID = cookies.find(cookie => {
        const [name, value] = cookie.split('=')

        if (name === 'nyxel_id') {
            return value
        }
    })

    if (!userID) {
        const userIDBackup = '{{userID}}'
        const maxAge = 1000 * 60 * 60 * 24 * 365 // 1 year
        document.cookie = `nyxel_id=${userIDBackup}; Path=/; Max-Age=${maxAge}; SameSite=Lax`
    }

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
}, 500)