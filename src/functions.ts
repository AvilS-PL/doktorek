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

let img = new Image()
export function imgLoad() {
    return new Promise(resolve => {
        img.src = "img/spritesheet.png"
        img.onload = () => {
            resolve("play")
        }
    })

}

export function renderAny(x: number, y: number, w: number, h: number, rx: number, ry: number, rw: number, rh: number, what: string) {

    // console.log("render")
    let el = document.getElementById(what)
    let canvas = document.createElement("canvas")
    canvas.width = rw
    canvas.height = rh
    let ctx = canvas.getContext("2d")
    ctx.drawImage(img, x, y, w, h, rx, ry, rw, rh)
    let url = canvas.toDataURL()
    el.style.width = rw + "px"
    el.style.height = rh + "px"
    el.style.backgroundImage = "url('" + url + "')"
}