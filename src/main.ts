import { Plansza, Pill, Virus, dane } from './assets'
import { rnc } from './functions'

let main = new Plansza(dane.width, dane.height, 16)
dane.pills[dane.kolejka] = new Pill(rnc(), rnc())
for (let i = 0; i < 3; i++) {
    dane.viruses[i] = new Virus(rnc())
    for (let j = 0; j < dane.viruses.length - 1; j++) {
        if (dane.viruses[i].x == dane.viruses[j].x && dane.viruses[i].y == dane.viruses[j].y) {
            dane.viruses[i] = new Virus(rnc())
            j = 0
            console.log("pow")
        }
    }
}
render()

function render() {

    main.tab.map((item, i) => {
        item.map((poditem, j) => {
            main.tab[i][j] = 0
            let temp = document.getElementById(i + "|" + j)
            temp.style.backgroundColor = "black"
            // temp.innerText = ""
            temp.style.backgroundImage = ""
        })
    })

    for (let i = 0; i < dane.viruses.length; i++) {
        dane.viruses[i].renderVirus()
        if (dane.viruses[i].color == "red") {
            main.tab[dane.viruses[i].y][dane.viruses[i].x] = 1
        } else if (dane.viruses[i].color == "yellow") {
            main.tab[dane.viruses[i].y][dane.viruses[i].x] = 2
        } else if (dane.viruses[i].color == "blue") {
            main.tab[dane.viruses[i].y][dane.viruses[i].x] = 3
        }
        if (dane.viruses[i].color != "white") {
            // document.getElementById(dane.viruses[i].y + "|" + dane.viruses[i].x).style.backgroundColor = dane.viruses[i].color
        }
    }

    for (let i = 0; i < dane.pills.length; i++) {

        dane.pills[i].renderPill()

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
        // document.getElementById(dane.pills[i].y1 + "|" + dane.pills[i].x1).innerText = main.tab[dane.pills[i].y1][dane.pills[i].x1].toString()
        // document.getElementById(dane.pills[i].y2 + "|" + dane.pills[i].x2).innerText = main.tab[dane.pills[i].y2][dane.pills[i].x2].toString()
    }

    if (dane.pills[dane.pills.length - 1].flag) {
        main.tab[dane.pills[dane.pills.length - 1].y1][dane.pills[dane.pills.length - 1].x1] = 9
        main.tab[dane.pills[dane.pills.length - 1].y2][dane.pills[dane.pills.length - 1].x2] = 9
    }

}

function gravity() {
    let rotation = dane.pills[dane.kolejka].rotation
    let x1 = dane.pills[dane.kolejka].x1
    let x2 = dane.pills[dane.kolejka].x2
    let y1 = dane.pills[dane.kolejka].y1
    let y2 = dane.pills[dane.kolejka].y2
    if (rotation == 1) {
        if ((y2 + 1) == main.height || main.tab[y2 + 1][x2] == 1 || main.tab[y2 + 1][x2] == 2 || main.tab[y2 + 1][x2] == 3) {
            dane.pills[dane.kolejka].deFlag()
            checkKill()
            if (dane.state == "play") {
                createPill()
            }
        } else {
            dane.pills[dane.kolejka].y1++
            dane.pills[dane.kolejka].y2++

        }
    } else if (rotation == 3) {
        if ((y1 + 1) == main.height || main.tab[y1 + 1][x1] == 1 || main.tab[y1 + 1][x1] == 2 || main.tab[y1 + 1][x1] == 3) {
            dane.pills[dane.kolejka].deFlag()
            checkKill()
            if (dane.state == "play") {
                createPill()
            }
        } else {
            dane.pills[dane.kolejka].y1++
            dane.pills[dane.kolejka].y2++
        }
    } else {
        if ((y1 + 1) == main.height || (y2 + 1) == main.height || main.tab[y1 + 1][x1] == 1 || main.tab[y1 + 1][x1] == 2 || main.tab[y1 + 1][x1] == 3 || main.tab[y2 + 1][x2] == 1 || main.tab[y2 + 1][x2] == 2 || main.tab[y2 + 1][x2] == 3) {
            dane.pills[dane.kolejka].deFlag()
            checkKill()
            if (dane.state == "play") {
                createPill()
            }
        } else {
            dane.pills[dane.kolejka].y1++
            dane.pills[dane.kolejka].y2++

        }
    }
}
function spadanie() {
    render()
    let zmiana = 0
    for (let i = main.height - 1; i >= 0; i--) {
        dane.pills.map((item, j) => {
            if (!item.flag) {
                if ((item.rotation == 0 || item.rotation == 2) && item.y1 == i) {
                    if (item.color1 != "white" && item.color2 != "white") {
                        if (main.tab[item.y2 + 1] != undefined && main.tab[item.y1 + 1] != undefined && main.tab[item.y1 + 1][item.x1] == 0 && main.tab[item.y2 + 1][item.x2] == 0) {
                            item.y1++
                            item.y2++
                            render()
                            zmiana++
                        }
                    } else if (item.color1 == "white" && item.color2 != "white") {
                        if (main.tab[item.y2 + 1] != undefined && main.tab[item.y2 + 1][item.x2] == 0) {
                            item.y1++
                            item.y2++
                            render()
                            zmiana++
                        }
                    } else if (item.color1 != "white" && item.color2 == "white") {
                        if (main.tab[item.y1 + 1] != undefined && main.tab[item.y1 + 1][item.x1] == 0) {
                            item.y1++
                            item.y2++
                            render()
                            zmiana++
                        }
                    }
                } else if (item.rotation == 1 && item.y2 == i) {
                    if (item.color2 != "white") {
                        if (main.tab[item.y2 + 1] != undefined && main.tab[item.y2 + 1][item.x2] == 0) {
                            item.y1++
                            item.y2++
                            render()
                            zmiana++
                        }
                    } else if (item.color1 != "white" && item.color2 == "white") {
                        if (main.tab[item.y1 + 1] != undefined && main.tab[item.y1 + 1][item.x1] == 0) {
                            item.y1++
                            render()
                            zmiana++
                        }
                    }
                } else if (item.rotation == 3 && item.y1 == i) {
                    if (item.color1 != "white") {
                        if (main.tab[item.y1 + 1] != undefined && main.tab[item.y1 + 1][item.x1] == 0) {
                            item.y1++
                            item.y2++
                            render()
                            zmiana++
                        }
                    } else if (item.color1 == "white" && item.color2 != "white") {
                        if (main.tab[item.y2 + 1] != undefined && main.tab[item.y2 + 1][item.x2] == 0) {
                            item.y2++
                            render()
                            zmiana++
                        }
                    }
                }
            }
        })
    }
    if (zmiana == 0) {
        dane.state = "play"
        checkKill()
    }
    if (dane.state == "play") {
        createPill()
        render()
    }
}
document.body.addEventListener("keydown", (e: KeyboardEvent) => {
    if (dane.state == "play") {
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
                poziom.length = 0
                dane.state = "spadanie"
            } else {
                poziom.length = 0
            }

        }
    }
    for (let i = 0; i < main.width; i++) {
        let pion = []
        for (let j = 0; j < main.height; j++) {

            if (pion.length == 0) {
                pion.push(j)
            }

            if (main.tab[j + 1] != undefined && main.tab[j + 1][i] != 0 && main.tab[j][i] == main.tab[j + 1][i]) {
                pion.push(j + 1)
            } else if (pion.length >= 4) {
                kill(pion, i, true)
                pion.length = 0
                dane.state = "spadanie"
            } else {
                pion.length = 0
            }

        }
    }
}

function kill(a: number[], b: number, rev: boolean) {
    if (!rev) {
        dane.pills.map((item, i) => {
            if (b == item.y1 && a.includes(item.x1)) {
                item.color1 = "white"
            }
            if (b == item.y2 && a.includes(item.x2)) {
                item.color2 = "white"
            }
        })
        dane.viruses.map((item, i) => {
            if (b == item.y && a.includes(item.x)) {
                item.color = "white"
            }
        })
    } else {
        dane.pills.map((item, i) => {
            if (b == item.x1 && a.includes(item.y1)) {
                item.color1 = "white"
            }
            if (b == item.x2 && a.includes(item.y2)) {
                item.color2 = "white"
            }
        })
        dane.viruses.map((item, i) => {
            if (b == item.x && a.includes(item.y)) {
                item.color = "white"
            }
        })
    }
}
let tick: number = 0
let workTick: number = 0
let prevTimestamp: number
window.requestAnimationFrame(refresh)
function refresh(timestamp: number) {
    if (timestamp != prevTimestamp) {
        prevTimestamp = timestamp

        if (dane.state == "play") {
            if (workTick % 60 == 0 && workTick != 0) {
                gravity()
                render()
                workTick = 0
            }
        } else if (dane.state == "spadanie") {
            if (workTick % 5 == 0 && workTick != 0) {
                spadanie()
                workTick = 0
            }
        }

        workTick++
        if (tick % 15 == 0 && tick != 0) {
            if (dane.frame == 1) {
                dane.frame = 0
            } else {
                dane.frame = 1
            }
            render()
        }

        if (tick == 60) {
            tick = 0
        } else {
            tick++
        }
    }

    window.requestAnimationFrame(refresh)
}

// setInterval(() => {
//     if (workTick == 10) {
//         if (dane.state == "play") {
//             gravity()
//             render()
//         } else if (dane.state == "spadanie") {
//             spadanie()
//         }
//     }
//     if (workTick == 10) {
//         workTick = 0
//     } else {
//         workTick++
//     }
// }, 100);