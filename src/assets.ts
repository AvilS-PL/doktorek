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
    zbicie1: string
    zbicie2: string
    constructor(color1: string, color2: string) {
        this.x1 = Math.floor((dane.width / 2) - 1)
        this.y1 = 0
        this.x2 = Math.floor((dane.width / 2))
        this.y2 = 0
        this.color1 = color1
        this.color2 = color2
        this.rotation = 0
        this.flag = true
        this.zbicie1 = "white"
        this.zbicie2 = "white"
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

export class Virus {
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

// interface Anim {
//     virusesFrames: kordy[],
//     virusesTimes: number[]
// }

// export let animations: Anim = {
//     virusesFrames: [{ x: 1704, y: 0 },],
//     virusesTimes: [30, 30]
// }