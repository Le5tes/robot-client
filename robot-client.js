
const start = () => {
    url = document.querySelector('input').value
    if (url) {
        const websocket = new WebSocket(url)

        websocket.onopen = (event) => {
            document.addEventListener("keydown",(event) => {
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
                        websocket.send(";eft")
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