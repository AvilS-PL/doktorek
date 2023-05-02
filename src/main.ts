let dane: { kolejka: number, wynik: number, pills: Pill[] } = {
    kolejka: 0,
    wynik: 0,
    pills: []
}

class Plansza {
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

class Pill {
    x1: number
    y1: number
    x2: number
    y2: number
    color1: string
    color2: string
    rotation: number
    flag: boolean
    constructor() {
        this.x1 = Math.floor((main.width / 2) - 1)
        this.y1 = 0
        this.x2 = Math.floor((main.width / 2))
        this.y2 = 0
        this.color1 = rnc()
        this.color2 = rnc()
        this.rotation = 0
        this.flag = true
    }

    deFlag() {
        this.flag = false
    }
}

let main = new Plansza(6, 10, 40)
dane.pills[dane.kolejka] = new Pill()
render()

function render() {

    main.tab.map((item, i) => {
        item.map((poditem, j) => {
            main.tab[i][j] = 0
            document.getElementById(i + "|" + j).style.backgroundColor = "white"
        })
    })

    for (let i = 0; i < dane.pills.length; i++) {
        main.tab[dane.pills[i].y1][dane.pills[i].x1] = 1
        document.getElementById(dane.pills[i].y1 + "|" + dane.pills[i].x1).style.backgroundColor = dane.pills[i].color1

        main.tab[dane.pills[i].y2][dane.pills[i].x2] = 1
        document.getElementById(dane.pills[i].y2 + "|" + dane.pills[i].x2).style.backgroundColor = dane.pills[i].color2
    }

    main.tab[dane.pills[dane.pills.length - 1].y1][dane.pills[dane.pills.length - 1].x1] = 2
    main.tab[dane.pills[dane.pills.length - 1].y2][dane.pills[dane.pills.length - 1].x2] = 2

    console.table(main.tab)
}

function gravity() {
    let rotation = dane.pills[dane.kolejka].rotation
    let x1 = dane.pills[dane.kolejka].x1
    let x2 = dane.pills[dane.kolejka].x2
    let y1 = dane.pills[dane.kolejka].y1
    let y2 = dane.pills[dane.kolejka].y2
    if (rotation == 1) {
        if ((y2 + 1) == main.height || main.tab[y2 + 1][x2] == 1) {
            createPill()
        } else {
            dane.pills[dane.kolejka].y1++
            dane.pills[dane.kolejka].y2++

        }
    } else if (rotation == 3) {
        if ((y1 + 1) == main.height || main.tab[y1 + 1][x1] == 1) {
            createPill()
        } else {
            dane.pills[dane.kolejka].y1++
            dane.pills[dane.kolejka].y2++
        }
    } else {
        if ((y1 + 1) == main.height || (y2 + 1) == main.height || main.tab[y1 + 1][x1] == 1 || main.tab[y2 + 1][x2] == 1) {
            createPill()
        } else {
            dane.pills[dane.kolejka].y1++
            dane.pills[dane.kolejka].y2++

        }
    }
    console.log(dane.pills[dane.kolejka])
    // for (let w = main.height - 1; w >= 0; w--) {


    // }
    // for (let i = 0; i < dane.pills.length; i++) {
    //     if (dane.pills[i].y < main.height && dane.pills[i].pole2.y < main.height) {
    //         dane.pills[i].pole1.y += 1
    //         dane.pills[i].pole2.y += 1
    //     }
    // }
}

function rnc() {
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

document.body.addEventListener("keydown", (e: KeyboardEvent) => {
    console.log(e.code)
    if (e.code == "KeyQ") {
        makeRotation("KeyQ")
    } else if (e.code == "KeyE") {
        makeRotation("KeyE")
    } else if (e.code == "KeyA") {
        makeMove("KeyA")
    } else if (e.code == "KeyD") {
        makeMove("KeyD")
    } else if (e.code == "KeyS") {
        makeMove("KeyS")
    }
});

function makeMove(key: string) {
    render()
    let rotation = dane.pills[dane.kolejka].rotation
    let x1 = dane.pills[dane.kolejka].x1
    let x2 = dane.pills[dane.kolejka].x2
    let y1 = dane.pills[dane.kolejka].y1
    let y2 = dane.pills[dane.kolejka].y2

    // if (rotation == 0) {

    // } else if (rotation == 1) {

    // } else if (rotation == 2) {

    // } else if (rotation == 3) {

    // }

    if (key == "KeyA") {
        if (main.tab[y1][x1 - 1] != undefined && main.tab[y2][x2 - 1] != undefined) {
            if (main.tab[y1][x1 - 1] != 1 && main.tab[y2][x2 - 1] != 1) {
                dane.pills[dane.kolejka].x1--
                dane.pills[dane.kolejka].x2--
            }
        }
    } else if (key == "KeyD") {
        if (main.tab[y1][x1 + 1] != undefined && main.tab[y2][x2 + 1] != undefined) {
            if (main.tab[y1][x1 + 1] != 1 && main.tab[y2][x2 + 1] != 1) {
                dane.pills[dane.kolejka].x1++
                dane.pills[dane.kolejka].x2++
            }
        }
    } else if (key == "KeyS") {
        if (main.tab[y1 + 1] != undefined && main.tab[y2 + 1] != undefined) {
            if (main.tab[y1 + 1][x1] != 1 && main.tab[y2 + 1][x2] != 1) {
                dane.pills[dane.kolejka].y1++
                dane.pills[dane.kolejka].y2++
            }
        }
    }

    render()
}

function makeRotation(key: string) {
    render()
    let rotation = dane.pills[dane.kolejka].rotation
    let x1 = dane.pills[dane.kolejka].x1
    let x2 = dane.pills[dane.kolejka].x2
    let y1 = dane.pills[dane.kolejka].y1
    let y2 = dane.pills[dane.kolejka].y2

    if (rotation == 0) {
        if (main.tab[y1 - 1] != undefined) {
            if (main.tab[y1 - 1][x1] == 0) {
                if (key == "KeyE") {
                    dane.pills[dane.kolejka].y1--
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].rotation++
                } else if (key == "KeyQ") {
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].y2--
                    dane.pills[dane.kolejka].rotation = 3
                }
            }
        } else {
            if (main.tab[y1 + 1][x1] == 0) {
                if (key == "KeyE") {
                    dane.pills[dane.kolejka].y2++
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].rotation++
                } else if (key == "KeyQ") {
                    dane.pills[dane.kolejka].y1++
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].rotation = 3
                }
            }
        }

    } else if (rotation == 1) {
        if (main.tab[y2][x2 + 1] != undefined) {
            if (main.tab[y2][x2 + 1] == 0) {
                if (key == "KeyE") {
                    dane.pills[dane.kolejka].x1++
                    dane.pills[dane.kolejka].y1++
                    dane.pills[dane.kolejka].rotation++
                } else if (key == "KeyQ") {
                    dane.pills[dane.kolejka].y1++
                    dane.pills[dane.kolejka].x2++
                    dane.pills[dane.kolejka].rotation--
                }
            }
        } else {
            if (main.tab[y2][x2 - 1] == 0) {
                if (key == "KeyE") {
                    dane.pills[dane.kolejka].y1++
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].rotation++
                } else if (key == "KeyQ") {
                    dane.pills[dane.kolejka].y1++
                    dane.pills[dane.kolejka].x1--
                    dane.pills[dane.kolejka].rotation--
                }
            }
        }
    } else if (rotation == 2) {
        if (main.tab[y2 - 1] != undefined && main.tab[y2 - 1][x2] == 0) {
            if (key == "KeyE") {
                dane.pills[dane.kolejka].x1--
                dane.pills[dane.kolejka].y2--
                dane.pills[dane.kolejka].rotation++
            } else if (key == "KeyQ") {
                dane.pills[dane.kolejka].x1--
                dane.pills[dane.kolejka].y1--
                dane.pills[dane.kolejka].rotation--
            }
        }
    } else if (rotation == 3) {
        if (main.tab[y1][x1 + 1] != undefined) {
            if (main.tab[y1][x1 + 1] == 0) {
                if (key == "KeyE") {
                    dane.pills[dane.kolejka].x2++
                    dane.pills[dane.kolejka].y2++
                    dane.pills[dane.kolejka].rotation = 0
                } else if (key == "KeyQ") {
                    dane.pills[dane.kolejka].x1++
                    dane.pills[dane.kolejka].y2++
                    dane.pills[dane.kolejka].rotation--
                }
            }
        } else {
            if (main.tab[y2][x1 - 1] == 0) {
                if (key == "KeyE") {
                    dane.pills[dane.kolejka].y2++
                    dane.pills[dane.kolejka].x1--
                    dane.pills[dane.kolejka].rotation = 0
                } else if (key == "KeyQ") {
                    dane.pills[dane.kolejka].y2++
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].rotation--
                }
            }
        }

    }

    render()
}

function createPill() {
    dane.pills[dane.kolejka].deFlag()
    dane.kolejka++
    dane.pills[dane.kolejka] = new Pill()
}

setInterval(() => {
    gravity()
    render()
}, 1000);