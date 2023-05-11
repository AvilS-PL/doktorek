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
}

interface Dane {
    kolejka: number,
    wynik: number,
    pills: Pill[],
    viruses: Virus[],
    width: number,
    height: number,
    state: string
}

export let dane: Dane = {
    kolejka: 0,
    wynik: 0,
    pills: [],
    viruses: [],
    width: 8,
    height: 16,
    state: "play"
}