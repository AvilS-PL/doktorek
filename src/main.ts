import { Plansza, Pill, Virus, dane } from './assets'
import { rnc } from './functions'

let main = new Plansza(dane.width, dane.height, 40)
dane.pills[dane.kolejka] = new Pill(rnc(), rnc())
render()

function render() {

    main.tab.map((item, i) => {
        item.map((poditem, j) => {
            main.tab[i][j] = 0
            document.getElementById(i + "|" + j).style.backgroundColor = "white"
            document.getElementById(i + "|" + j).innerText = "0"
        })
    })

    for (let i = 0; i < dane.pills.length; i++) {
        document.getElementById(dane.pills[i].y1 + "|" + dane.pills[i].x1).style.backgroundColor = dane.pills[i].color1
        document.getElementById(dane.pills[i].y2 + "|" + dane.pills[i].x2).style.backgroundColor = dane.pills[i].color2
        if (dane.pills[i].color1 == "red") {
            main.tab[dane.pills[i].y1][dane.pills[i].x1] = 1
        } else if (dane.pills[i].color1 == "yellow") {
            main.tab[dane.pills[i].y1][dane.pills[i].x1] = 2
        } else if (dane.pills[i].color1 == "blue") {
            main.tab[dane.pills[i].y1][dane.pills[i].x1] = 3
        }

        if (dane.pills[i].color2 == "red") {
            main.tab[dane.pills[i].y2][dane.pills[i].x2] = 1
        } else if (dane.pills[i].color2 == "yellow") {
            main.tab[dane.pills[i].y2][dane.pills[i].x2] = 2
        } else if (dane.pills[i].color2 == "blue") {
            main.tab[dane.pills[i].y2][dane.pills[i].x2] = 3
        }

        document.getElementById(dane.pills[i].y1 + "|" + dane.pills[i].x1).innerText = main.tab[dane.pills[i].y1][dane.pills[i].x1].toString()
        document.getElementById(dane.pills[i].y2 + "|" + dane.pills[i].x2).innerText = main.tab[dane.pills[i].y2][dane.pills[i].x2].toString()

    }

    main.tab[dane.pills[dane.pills.length - 1].y1][dane.pills[dane.pills.length - 1].x1] = 9
    main.tab[dane.pills[dane.pills.length - 1].y2][dane.pills[dane.pills.length - 1].x2] = 9

}

function gravity() {
    let rotation = dane.pills[dane.kolejka].rotation
    let x1 = dane.pills[dane.kolejka].x1
    let x2 = dane.pills[dane.kolejka].x2
    let y1 = dane.pills[dane.kolejka].y1
    let y2 = dane.pills[dane.kolejka].y2
    if (rotation == 1) {
        if ((y2 + 1) == main.height || main.tab[y2 + 1][x2] == 1 || main.tab[y2 + 1][x2] == 2 || main.tab[y2 + 1][x2] == 3) {
            createPill()
            checkKill()
        } else {
            dane.pills[dane.kolejka].y1++
            dane.pills[dane.kolejka].y2++

        }
    } else if (rotation == 3) {
        if ((y1 + 1) == main.height || main.tab[y1 + 1][x1] == 1 || main.tab[y1 + 1][x1] == 2 || main.tab[y1 + 1][x1] == 3) {
            createPill()
            checkKill()
        } else {
            dane.pills[dane.kolejka].y1++
            dane.pills[dane.kolejka].y2++
        }
    } else {
        if ((y1 + 1) == main.height || (y2 + 1) == main.height || main.tab[y1 + 1][x1] == 1 || main.tab[y1 + 1][x1] == 2 || main.tab[y1 + 1][x1] == 3 || main.tab[y2 + 1][x2] == 1 || main.tab[y2 + 1][x2] == 2 || main.tab[y2 + 1][x2] == 3) {
            createPill()
            checkKill()
        } else {
            dane.pills[dane.kolejka].y1++
            dane.pills[dane.kolejka].y2++

        }
    }
    // for (let w = main.height - 1; w >= 0; w--) {


    // }
    // for (let i = 0; i < dane.pills.length; i++) {
    //     if (dane.pills[i].y < main.height && dane.pills[i].pole2.y < main.height) {
    //         dane.pills[i].pole1.y += 1
    //         dane.pills[i].pole2.y += 1
    //     }
    // }
}

document.body.addEventListener("keydown", (e: KeyboardEvent) => {
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
            if ((main.tab[y1][x1 - 1] == 0 || main.tab[y1][x1 - 1] == 9) && (main.tab[y2][x2 - 1] == 0 || main.tab[y2][x2 - 1] == 9)) {
                dane.pills[dane.kolejka].x1--
                dane.pills[dane.kolejka].x2--
            }
        }
    } else if (key == "KeyD") {
        if (main.tab[y1][x1 + 1] != undefined && main.tab[y2][x2 + 1] != undefined) {
            if ((main.tab[y1][x1 + 1] == 0 || main.tab[y1][x1 + 1] == 9) && (main.tab[y2][x2 + 1] == 0 || main.tab[y2][x2 + 1] == 9)) {
                dane.pills[dane.kolejka].x1++
                dane.pills[dane.kolejka].x2++
            }
        }
    } else if (key == "KeyS") {
        if (main.tab[y1 + 1] != undefined && main.tab[y2 + 1] != undefined) {
            if ((main.tab[y1 + 1][x1] == 0 || main.tab[y1 + 1][x1] == 9) && (main.tab[y2 + 1][x2] == 0 || main.tab[y2 + 1][x2] == 9)) {
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
    dane.pills[dane.kolejka] = new Pill(rnc(), rnc())
}

function checkKill() {
    render()
    for (let i = 0; i < main.height; i++) {
        let poziom = []
        for (let j = 0; j < main.width; j++) {

            if (poziom.length == 0) {
                poziom.push(j)
            }

            if (main.tab[i][j + 1] != undefined && main.tab[i][j + 1] != 0 && main.tab[i][j] == main.tab[i][j + 1]) {
                poziom.push(j + 1)
            } else if (poziom.length >= 4) {
                kill(poziom, i, false)
            } else {
                poziom.length = 0
            }

        }
    }
}

function kill(a: number[], b: number, rev: boolean) {
    if (!rev) {
        dane.pills.map((item, i) => {
            if (b == item.y1 && a.includes(item.x1)) {
                item.color1 = "white"
                console.log("Kill: " + item.y1 + "-" + item.x1)
            }
            if (b == item.y2 && a.includes(item.x2)) {
                item.color2 = "white"
                console.log("Kill: " + item.y2 + "-" + item.x2)
            }
        })
    } else {

    }
}


setInterval(() => {
    gravity()
    render()
}, 1000);