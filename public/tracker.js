(function() {
    const SITE_ID = "cmo67q1fa0005vgfj1566jg7t"

    function track(eventType) {
        fetch("http://localhost:3000/api/track", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({
                siteId: SITE_ID,
                type: eventType,
                path: window.location.pathname
            })
        })
    }

        track('pageview')


    document.addEventListener("click", function() {
        track('click')
    })
})()