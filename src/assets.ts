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
        let p1 = document.getElementById(this.y1 + "|" + this.x1)
        let p2 = document.getElementById(this.y2 + "|" + this.x2)
        if (this.color1 != "white" && this.color2 != "white") {
            p1.style.backgroundImage = "url('img/spritesheet.png')"
            p2.style.backgroundImage = "url('img/spritesheet.png')"
            if (this.color1 == "red") {
                p1.style.backgroundPositionY = "-32px"
            } else if (this.color1 == "yellow") {
                p1.style.backgroundPositionY = "-64px"
            } else if (this.color1 == "blue") {
                p1.style.backgroundPositionY = "0px"
            }

            if (this.color2 == "red") {
                p2.style.backgroundPositionY = "-32px"
            } else if (this.color2 == "yellow") {
                p2.style.backgroundPositionY = "-64px"
            } else if (this.color2 == "blue") {
                p2.style.backgroundPositionY = "0px"
            }

            if (this.rotation == 0) {
                p1.style.backgroundPositionX = "-1640px"
                p2.style.backgroundPositionX = "-1672px"
            } else if (this.rotation == 1) {
                p1.style.backgroundPositionX = "-1688px"
                p2.style.backgroundPositionX = "-1624px"
            } else if (this.rotation == 2) {
                p1.style.backgroundPositionX = "-1672px"
                p2.style.backgroundPositionX = "-1640px"
            } else if (this.rotation == 3) {
                p1.style.backgroundPositionX = "-1624px"
                p2.style.backgroundPositionX = "-1688px"
            }
        } else if (this.color1 != "white" && this.color2 == "white") {
            p1.style.backgroundImage = "url('img/spritesheet.png')"
            p1.style.backgroundPositionX = "-1608px"
            if (this.color1 == "red") {
                p1.style.backgroundPositionY = "-32px"
            } else if (this.color1 == "yellow") {
                p1.style.backgroundPositionY = "-64px"
            } else if (this.color1 == "blue") {
                p1.style.backgroundPositionY = "0px"
            }
        } else if (this.color1 == "white" && this.color2 != "white") {
            p2.style.backgroundImage = "url('img/spritesheet.png')"
            p2.style.backgroundPositionX = "-1608px"
            if (this.color2 == "red") {
                p2.style.backgroundPositionY = "-32px"
            } else if (this.color2 == "yellow") {
                p2.style.backgroundPositionY = "-64px"
            } else if (this.color2 == "blue") {
                p2.style.backgroundPositionY = "0px"
            }
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
        this.renderVirus()
    }

    renderVirus() {
        let p1 = document.getElementById(this.y + "|" + this.x)
        if (this.color != "white") {
            p1.style.backgroundImage = "url('img/spritesheet.png')"
            if (this.color == "red") {
                p1.style.backgroundPositionX = "-1736px"
            } else if (this.color == "yellow") {
                p1.style.backgroundPositionX = "-1752px"
            } else if (this.color == "blue") {
                p1.style.backgroundPositionX = "-1720px"

            }
            if (dane.frame == 1) {
                p1.style.backgroundPositionY = "-32px"
            } else {
                p1.style.backgroundPositionY = "0px"
            }
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
    frame: number
}

export let dane: Dane = {
    kolejka: 0,
    wynik: 0,
    pills: [],
    viruses: [],
    width: 8,
    height: 16,
    state: "play",
    frame: 0
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