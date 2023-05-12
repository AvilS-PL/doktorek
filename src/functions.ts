export function rnc() {
    let main = Math.floor(Math.random() * 3)
    if (main == 0) {
        return "red"
    } else if (main == 1) {
        return "yellow"
    } else if (main == 2) {
        return "blue"
    } else {
        return "red"
    }
}


export let img = new Image()
img.src = "img/spritesheet.png"
img.onload = () => {
    renderAny(2382, 0, 640, 384, 0, 0, 640, 384)
}

export function renderAny(x: number, y: number, w: number, h: number, rx: number, ry: number, rw: number, rh: number,) {
    let test = document.getElementById("test")
    let canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h
    let ctx = canvas.getContext("2d")
    ctx.drawImage(img, x, y, w, h, rx, ry, rw, rh)
    let url = canvas.toDataURL()
    test.style.backgroundImage = "url('" + url + "')"
    document.body.append(canvas)
}