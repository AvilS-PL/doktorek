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

interface obraz {
    x: number,
    y: number,
    w: number,
    h: number,
    rx: number,
    ry: number,
    rw: number,
    rh: number
}

let canvas = document.createElement("canvas")
let ctx = canvas.getContext("2d")
export function renderAny(obj: obraz, what: string) {
    // console.log("render")
    let el = document.getElementById(what)
    canvas.width = obj.rw
    canvas.height = obj.rh
    ctx.drawImage(img, obj.x, obj.y, obj.w, obj.h, 0, 0, obj.rw, obj.rh)
    let url = canvas.toDataURL()
    el.style.width = obj.rw + "px"
    el.style.height = obj.rh + "px"
    el.style.top = obj.ry + "px"
    el.style.left = obj.rx + "px"
    el.style.backgroundImage = "url('" + url + "')"
}