export class Plansza {
    width: number
    height: number
    size: number
    plansza: HTMLDivElement
    pillPlansza: HTMLElement
    tab: number[][]
    constructor(width: number, height: number, size: number) {
        this.width = width
        this.height = height
        this.size = size
        this.tab = []
        this.plansza = document.createElement("div")
        this.plansza.id = "plansza"
        this.plansza.style.width = this.size * width + "px"

        this.pillPlansza = document.createElement("div")
        this.pillPlansza.id = "pillPlansza"
        this.pillPlansza.style.width = this.size * 12 + "px"
        this.generateMap()
        this.generatePillMap()
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
        // let pre1 = document.createElement("div")
        // pre1.id = "pre1"
        // pre1.style.width = this.size + "px"
        // pre1.style.height = this.size + "px"
        // pre1.style.left = "480px"
        // pre1.style.top = "48px"
        // let pre2 = document.createElement("div")
        // pre2.id = "pre2"
        // pre2.style.width = this.size + "px"
        // pre2.style.height = this.size + "px"
        // pre1.style.left = "480px"
        // pre1.style.top = "48px"
        document.body.append(this.plansza)
    }

    generatePillMap() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 12; j++) {
                let pole = document.createElement("div")
                pole.style.width = this.size + "px"
                pole.style.height = this.size + "px"
                pole.className = "pole2"
                pole.id = (100 + i) + "|" + (100 + j)

                this.pillPlansza.append(pole)

                this.pillPlansza.style.position = "absolute"
                this.pillPlansza.style.left = "320px"
                this.pillPlansza.style.top = "2px"
            }
        }
        document.body.append(this.pillPlansza)
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
    zbicie1: string
    zbicie2: string
    constructor(color1: string, color2: string) {
        this.x1 = 110
        this.y1 = 103
        this.x2 = 111
        this.y2 = 103
        this.color1 = color1
        this.color2 = color2
        this.rotation = 0
        this.flag = false
        this.zbicie1 = "white"
        this.zbicie2 = "white"
    }

    deFlag() {
        this.flag = false
    }

    Flag() {
        this.flag = true
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
            if (dane.state == "kill" && this.zbicie2 != "white") {
                p2.style.backgroundImage = "url('img/spritesheet.png')"
                p2.style.backgroundPositionX = "-1656px"
                if (this.zbicie2 == "red") {
                    p2.style.backgroundPositionY = "-32px"
                } else if (this.zbicie2 == "yellow") {
                    p2.style.backgroundPositionY = "-64px"
                } else if (this.zbicie2 == "blue") {
                    p2.style.backgroundPositionY = "0px"
                }

                p1.style.backgroundImage = "url('img/spritesheet.png')"
                if (this.color1 == "red") {
                    p1.style.backgroundPositionY = "-32px"
                } else if (this.color1 == "yellow") {
                    p1.style.backgroundPositionY = "-64px"
                } else if (this.color1 == "blue") {
                    p1.style.backgroundPositionY = "0px"
                }
                if (this.rotation == 0) {
                    p1.style.backgroundPositionX = "-1640px"
                } else if (this.rotation == 1) {
                    p1.style.backgroundPositionX = "-1688px"
                } else if (this.rotation == 2) {
                    p1.style.backgroundPositionX = "-1672px"
                } else if (this.rotation == 3) {
                    p1.style.backgroundPositionX = "-1624px"
                }
            } else {
                p1.style.backgroundImage = "url('img/spritesheet.png')"
                p1.style.backgroundPositionX = "-1608px"
                if (this.color1 == "red") {
                    p1.style.backgroundPositionY = "-32px"
                } else if (this.color1 == "yellow") {
                    p1.style.backgroundPositionY = "-64px"
                } else if (this.color1 == "blue") {
                    p1.style.backgroundPositionY = "0px"
                }
            }

        } else if (this.color1 == "white" && this.color2 != "white") {
            if (dane.state == "kill" && this.zbicie1 != "white") {
                p1.style.backgroundImage = "url('img/spritesheet.png')"
                p1.style.backgroundPositionX = "-1656px"
                if (this.zbicie1 == "red") {
                    p1.style.backgroundPositionY = "-32px"
                } else if (this.zbicie1 == "yellow") {
                    p1.style.backgroundPositionY = "-64px"
                } else if (this.zbicie1 == "blue") {
                    p1.style.backgroundPositionY = "0px"
                }

                p2.style.backgroundImage = "url('img/spritesheet.png')"
                if (this.color2 == "red") {
                    p2.style.backgroundPositionY = "-32px"
                } else if (this.color2 == "yellow") {
                    p2.style.backgroundPositionY = "-64px"
                } else if (this.color2 == "blue") {
                    p2.style.backgroundPositionY = "0px"
                }

                if (this.rotation == 0) {
                    p2.style.backgroundPositionX = "-1672px"
                } else if (this.rotation == 1) {
                    p2.style.backgroundPositionX = "-1624px"
                } else if (this.rotation == 2) {
                    p2.style.backgroundPositionX = "-1640px"
                } else if (this.rotation == 3) {
                    p2.style.backgroundPositionX = "-1688px"
                }
            } else {
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
        } else if (this.color1 == "white" && this.color2 == "white") {
            if (dane.state == "kill" && this.zbicie2 != "white") {
                p2.style.backgroundImage = "url('img/spritesheet.png')"
                p2.style.backgroundPositionX = "-1656px"
                if (this.zbicie2 == "red") {
                    p2.style.backgroundPositionY = "-32px"
                } else if (this.zbicie2 == "yellow") {
                    p2.style.backgroundPositionY = "-64px"
                } else if (this.zbicie2 == "blue") {
                    p2.style.backgroundPositionY = "0px"
                }
            }
            if (dane.state == "kill" && this.zbicie1 != "white") {
                p1.style.backgroundImage = "url('img/spritesheet.png')"
                p1.style.backgroundPositionX = "-1656px"
                if (this.zbicie1 == "red") {
                    p1.style.backgroundPositionY = "-32px"
                } else if (this.zbicie1 == "yellow") {
                    p1.style.backgroundPositionY = "-64px"
                } else if (this.zbicie1 == "blue") {
                    p1.style.backgroundPositionY = "0px"
                }
            }
        }

    }
}

interface intVirus {
    x: number
    y: number
    color: string
    zbicie: string
    renderVirus: (frame: number) => void
}

export class Virus implements intVirus {
    x: number
    y: number
    color: string
    zbicie: string
    constructor(color: string) {
        this.x = Math.floor(Math.random() * dane.width)
        this.y = Math.floor(Math.random() * (dane.height - 5)) + 5
        this.color = color
        this.zbicie = "white"
    }

    renderVirus(frame: number) {
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
            if (frame <= 30) {
                p1.style.backgroundPositionY = "-32px"
            } else {
                p1.style.backgroundPositionY = "0px"
            }
        }
        if (dane.state == "kill" && this.zbicie != "white") {
            p1.style.backgroundImage = "url('img/spritesheet.png')"
            p1.style.backgroundPositionX = "-1704px"
            if (this.zbicie == "red") {
                p1.style.backgroundPositionY = "-32px"
            } else if (this.zbicie == "yellow") {
                p1.style.backgroundPositionY = "-64px"
            } else if (this.zbicie == "blue") {
                p1.style.backgroundPositionY = "0px"
            }
        }
    }
}

interface Dane {
    kolejka: number,
    pill?: Pill,
    pills: Pill[],
    viruses: Virus[],
    width: number,
    height: number,
    state: string,

}

export let dane: Dane = {
    kolejka: 0,

    pills: [],
    viruses: [],

    width: 8,
    height: 16,
    state: "animacja",

}



interface objList {
    [index: string]: number
}
export let napisy: objList = {
    score: 1234,
    top: 555,
    level: 1,
    virusy: 0
}

interface kordy {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    rotation: number
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

interface xy {
    x: number,
    y: number
}

interface Anim {
    pillFrames: kordy[],
    pillFrame: number,

    armFrames: obraz[],
    armFrame: number,

    redVirusFrames1: obraz[],
    yellowVirusFrames1: obraz[],
    blueVirusFrames1: obraz[],
    redVirusFrames2: obraz[],
    yellowVirusFrames2: obraz[],
    blueVirusFrames2: obraz[],

    virusesKordy: xy[]
    virusesKord: number[]

    virusesFrame1: number
    virusesFrame2: number
}

export let animations: Anim = {
    pillFrames: [
        { x1: 110, y1: 103, x2: 111, y2: 103, rotation: 0 },
        { x1: 110, y1: 103, x2: 110, y2: 102, rotation: 3 },
        { x1: 110, y1: 102, x2: 109, y2: 102, rotation: 2 },
        { x1: 109, y1: 101, x2: 109, y2: 102, rotation: 1 },
        { x1: 108, y1: 101, x2: 109, y2: 101, rotation: 0 },
        { x1: 108, y1: 101, x2: 108, y2: 100, rotation: 3 },
        { x1: 108, y1: 101, x2: 107, y2: 101, rotation: 2 },
        { x1: 107, y1: 100, x2: 107, y2: 101, rotation: 1 },
        { x1: 106, y1: 101, x2: 107, y2: 101, rotation: 0 },
        { x1: 106, y1: 101, x2: 106, y2: 100, rotation: 3 },
        { x1: 106, y1: 101, x2: 105, y2: 101, rotation: 2 },
        { x1: 105, y1: 100, x2: 105, y2: 101, rotation: 1 },
        { x1: 104, y1: 101, x2: 105, y2: 101, rotation: 0 },
        { x1: 104, y1: 101, x2: 104, y2: 100, rotation: 3 },
        { x1: 104, y1: 101, x2: 103, y2: 101, rotation: 2 },
        { x1: 103, y1: 100, x2: 103, y2: 101, rotation: 1 },
        { x1: 102, y1: 101, x2: 103, y2: 101, rotation: 0 },
        { x1: 102, y1: 101, x2: 102, y2: 100, rotation: 3 },
        { x1: 102, y1: 102, x2: 101, y2: 102, rotation: 2 },
        { x1: 101, y1: 101, x2: 101, y2: 102, rotation: 1 },
        { x1: 100, y1: 102, x2: 101, y2: 102, rotation: 0 },
        { x1: 100, y1: 103, x2: 101, y2: 103, rotation: 0 },
        { x1: 100, y1: 104, x2: 101, y2: 104, rotation: 0 },
        { x1: 100, y1: 105, x2: 101, y2: 105, rotation: 0 },
    ],
    pillFrame: 0,

    armFrames: [
        { x: 1536, y: 0, w: 24, h: 72, rx: 496, ry: 66, rw: 16, rh: 48 },
        { x: 1464, y: 0, w: 48, h: 48, rx: 480, ry: 82, rw: 32, rh: 32 },
        { x: 1416, y: 0, w: 24, h: 48, rx: 496, ry: 98, rw: 16, rh: 32 },
    ],
    armFrame: 0,

    redVirusFrames1: [
        { x: 480, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 384, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 480, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 576, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 480, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
    ],
    yellowVirusFrames1: [
        { x: 864, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 768, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 864, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 960, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 864, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
    ],
    blueVirusFrames1: [
        { x: 96, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 0, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 96, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 192, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 96, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
    ],

    redVirusFrames2: [
        { x: 480, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 672, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
    ],
    yellowVirusFrames2: [
        { x: 864, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 1056, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
    ],
    blueVirusFrames2: [
        { x: 96, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
        { x: 288, y: 0, w: 96, h: 72, rx: 0, ry: 0, rw: 64, rh: 48 },
    ],

    virusesKordy: [
        { x: 120, y: 300 },
        { x: 130, y: 280 },
        { x: 140, y: 260 },
        { x: 120, y: 240 },
        { x: 100, y: 220 },
        { x: 70, y: 220 },
        { x: 50, y: 240 },
        { x: 40, y: 260 },
        { x: 50, y: 280 },
        { x: 60, y: 300 },
        { x: 80, y: 310 },
        { x: 100, y: 310 },
    ],
    virusesKord: [0, 4, 8],
    virusesFrame1: 0,
    virusesFrame2: 0,
}