(function () {
  const API_KEY = "3cfb487cf1de2019cbaa974d0b75200c";

  let lastSent = 0
  function track(eventType) {
    const now = Date.now()
    if(now - lastSent < 1000) return
    lastSent = now
    if (navigator.sendBeacon)
      navigator.sendBeacon(
        "http://localhost:3000/api/track",
        JSON.stringify({
          apiKey: API_KEY,
          type: eventType,
          path: window.location.pathname,
        }),
      );
    else
      fetch("http://localhost:3000/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          apiKey: API_KEY,
          type: eventType,
          path: window.location.pathname,
        }),
      });
  }

  track("pageview");

  document.addEventListener("click", function () {
    track("click");
  });
})();
