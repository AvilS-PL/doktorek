import { renderAny } from "./functions";
export class Plansza {
    width: number
    height: number
    size: number
    plansza: HTMLDivElement
    tab: number[][]
    constructor(width: number, height: number, size: number) {
        this.width = width
        this.height = height
        this.size = size
        this.tab = []
        this.plansza = document.createElement("div")
        this.plansza.id = "plansza"
        this.plansza.style.width = this.size * width + "px"
        this.generateMap()
    }

    generateMap() {
        for (let i = 0; i < this.height; i++) {
            this.tab[i] = []
            for (let j = 0; j < this.width; j++) {
                let pole = document.createElement("div")
                pole.style.width = this.size + "px"
                pole.style.height = this.size + "px"
                pole.className = "pole"
                pole.id = i + "|" + j

                this.tab[i][j] = 0
                this.plansza.append(pole)

                this.plansza.style.position = "absolute"
                this.plansza.style.left = "272px"
                this.plansza.style.top = "98px"
            }
        }
        document.body.append(this.plansza)
    }

}

export class Pill {
    x1: number
    y1: number
    x2: number
    y2: number
    color1: string
    color2: string
    rotation: number
    flag: boolean
    constructor(color1: string, color2: string) {
        this.x1 = Math.floor((dane.width / 2) - 1)
        this.y1 = 0
        this.x2 = Math.floor((dane.width / 2))
        this.y2 = 0
        this.color1 = color1
        this.color2 = color2
        this.rotation = 0
        this.flag = true
    }

    deFlag() {
        this.flag = false
    }

    renderPill() {
        let p1 = this.y1 + "|" + this.x1
        let p2 = this.y2 + "|" + this.x2
        let p1Y, p1X, p2Y, p2X
        if (this.color1 != "white" && this.color2 != "white") {
            if (this.color1 == "red") {
                p1Y = 32
            } else if (this.color1 == "yellow") {
                p1Y = 64
            } else if (this.color1 == "blue") {
                p1Y = 0
            }

            if (this.color2 == "red") {
                p2Y = 32
            } else if (this.color2 == "yellow") {
                p2Y = 64
            } else if (this.color2 == "blue") {
                p2Y = -0
            }

            if (this.rotation == 0) {
                p1X = 1640
                p2X = 1672
            } else if (this.rotation == 1) {
                p1X = 1688
                p2X = 1624
            } else if (this.rotation == 2) {
                p1X = 1672
                p2X = 1640
            } else if (this.rotation == 3) {
                p1X = 1624
                p2X = 1688
            }
        } else if (this.color1 != "white" && this.color2 == "white") {
            p1X = 1608
            if (this.color1 == "red") {
                p1Y = 32
            } else if (this.color1 == "yellow") {
                p1Y = 64
            } else if (this.color1 == "blue") {
                p1Y = 0
            }
        } else if (this.color1 == "white" && this.color2 != "white") {
            p2X = 1608
            if (this.color2 == "red") {
                p2Y = 32
            } else if (this.color2 == "yellow") {
                p2Y = 64
            } else if (this.color2 == "blue") {
                p2Y = 0
            }
        }

        if (this.color1 != "white" || this.color2 != "white") {
            renderAny(p1X, p1Y, 16, 16, 0, 0, 16, 16, p1)
            renderAny(p2X, p2Y, 16, 16, 0, 0, 16, 16, p2)
        }
    }
}

export class Virus {
    x: number
    y: number
    color: string
    constructor(color: string) {
        this.x = Math.floor(Math.random() * dane.width)
        this.y = Math.floor(Math.random() * (dane.height - 5)) + 5
        this.color = color
    }

    renderVirus(frame: number) {
        let p = this.y + "|" + this.x
        let pX, pY
        if (this.color != "white") {
            if (this.color == "red") {
                pX = 1736
            } else if (this.color == "yellow") {
                pX = 1752
            } else if (this.color == "blue") {
                pX = 1720

            }
            if (frame % 30 == 0 && frame != 0) {
                pY = 32
            } else {
                pY = 0
            }

            renderAny(pX, pY, 16, 16, 0, 0, 16, 16, p)
        }
    }
}

interface Dane {
    kolejka: number,
    wynik: number,
    pills: Pill[],
    viruses: Virus[],
    width: number,
    height: number,
    state: string,

}

export let dane: Dane = {
    kolejka: 0,
    wynik: 0,
    pills: [],
    viruses: [],
    width: 8,
    height: 16,
    state: "play",

}

interface kordy {
    x: number,
    y: number
}

interface Anim {
    virusesFrames: kordy[],
    virusesTimes: number[]
}

export let animations: Anim = {
    virusesFrames: [{ x: 1704, y: 0 },],
    virusesTimes: [30, 30]
}