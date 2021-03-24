
const start = () => {
    url = document.querySelector('input').value
    if (url) {
        const websocket = new WebSocket(url)
        var player = new JSMpeg.Player(url, {canvas: document.getElementById('camera-view-canvas')})

        websocket.onopen = (event) => {
            console.log("websocket connected")
            document.addEventListener("keydown",(event) => {
                console.log("sending event")
                switch (event.key) {
                    case "Down": // IE/Edge specific value
                    case "ArrowDown":
                        websocket.send("back")
                        break;
                    case "Up": // IE/Edge specific value
                    case "ArrowUp":
                        websocket.send("forward")
                        break;
                    case "Left": // IE/Edge specific value
                    case "ArrowLeft":
                        websocket.send("left")
                        break;
                    case "Right": // IE/Edge specific value
                    case "ArrowRight":
                        websocket.send("right")
                        break;
                }

                event.preventDefault();
            });

            document.addEventListener("keyup", (event) => {
                websocket.send("stop");
                event.preventDefault();
            });
        }
    }
}
