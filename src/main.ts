import { Plansza, Pill, Virus, dane, animations, napisy } from './assets'
import { rnc, renderAny, renderMany, imgLoad } from './functions'


let main = new Plansza(dane.width, dane.height, 16)
dane.pill = new Pill(rnc(), rnc())
load()
async function load() {
    await imgLoad()
    update()
    window.requestAnimationFrame(refresh)
}

if (localStorage.getItem("top")) {
    napisy["top"] = + localStorage.getItem("top")
} else {
    napisy["top"] = 0
    localStorage.setItem("top", "0")
}

napisy["virusy"] = 4
napisy["levelScore"] = napisy["virusy"] * 100
for (let i = 0; i < napisy["virusy"]; i++) {
    dane.viruses[i] = new Virus(rnc())
    for (let j = 0; j < dane.viruses.length - 1; j++) {
        if (dane.viruses[i].x == dane.viruses[j].x && dane.viruses[i].y == dane.viruses[j].y) {
            dane.viruses[i] = new Virus(rnc())
            j = 0
        }
    }
}

function update() {

    main.tab.map((item, i) => {
        item.map((poditem, j) => {
            main.tab[i][j] = 0
        })
    })

    for (let i = 0; i < dane.viruses.length; i++) {
        dane.viruses[i].renderVirus(tick)
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

    if (dane.pills.length > 0 && dane.pills[dane.pills.length - 1].flag) {
        main.tab[dane.pills[dane.pills.length - 1].y1][dane.pills[dane.pills.length - 1].x1] = 9
        main.tab[dane.pills[dane.pills.length - 1].y2][dane.pills[dane.pills.length - 1].x2] = 9
    }

    let tempCheck: number = 0
    for (let i = 0; i < dane.viruses.length; i++) {
        if (dane.viruses[i].color != "white") {
            tempCheck++
        }
    }
    napisy["virusy"] = tempCheck
    napisy["score"] = napisy["levelScore"] - (napisy["virusy"] * 100)
    localStorage.setItem("score", napisy["score"].toString());
    console.log(localStorage.getItem("score"))
}

function render() {
    renderAny({ x: 2382, y: 0, w: 640, h: 384, rx: 0, ry: 0, rw: 640, rh: 384 }, "main")

    main.tab.map((item, i) => {
        item.map((poditem, j) => {
            let temp = document.getElementById(i + "|" + j)
            temp.style.backgroundImage = ""
        })
    })
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 12; j++) {
            let pole = document.getElementById((100 + i) + "|" + (100 + j))
            pole.style.backgroundImage = ""
        }
    }
    for (let i = 0; i < dane.viruses.length; i++) {
        dane.viruses[i].renderVirus(tick)
    }

    for (let i = 0; i < dane.pills.length; i++) {
        dane.pills[i].renderPill()
    }

    if (dane.state == "gameover") {
        renderAny({ x: 1880, y: 0, w: 168, h: 167, rx: 474, ry: 48, rw: 120, rh: 112 }, "doktor")
        renderAny({ x: 2048, y: 0, w: 334, h: 119, rx: 234, ry: 120, rw: 200, rh: 80 }, "endgame")
    } else if (dane.state == "gamewin") {
        renderAny({ x: 3022, y: 0, w: 423, h: 119, rx: 208, ry: 120, rw: 250, rh: 80 }, "endgame")
        dane.pill.renderPill()
        renderAny(animations.armFrames[animations.armFrame], "arm")

    } else {
        dane.pill.renderPill()
        renderAny(animations.armFrames[animations.armFrame], "arm")
    }

    let a1: number = 0
    if (dane.state == "gameover") {
        if (tick % 20 == 0 && tick != 0) {
            if (animations.virusesFrame2 < animations.redVirusFrames2.length - 1) {
                animations.virusesFrame2++
            } else {
                animations.virusesFrame2 = 0
            }
        }
        animations.redVirusFrames2[animations.virusesFrame2].rx = animations.virusesKordy[animations.virusesKord[0]].x
        animations.redVirusFrames2[animations.virusesFrame2].ry = animations.virusesKordy[animations.virusesKord[0]].y
        animations.yellowVirusFrames2[animations.virusesFrame2].rx = animations.virusesKordy[animations.virusesKord[1]].x
        animations.yellowVirusFrames2[animations.virusesFrame2].ry = animations.virusesKordy[animations.virusesKord[1]].y
        animations.blueVirusFrames2[animations.virusesFrame2].rx = animations.virusesKordy[animations.virusesKord[2]].x
        animations.blueVirusFrames2[animations.virusesFrame2].ry = animations.virusesKordy[animations.virusesKord[2]].y
        renderAny(animations.redVirusFrames2[animations.virusesFrame2], "rVirus")
        renderAny(animations.yellowVirusFrames2[animations.virusesFrame2], "yVirus")
        renderAny(animations.blueVirusFrames2[animations.virusesFrame2], "bVirus")
    } else {
        if (tick % 15 == 0 && tick != 0) {

            if (animations.virusesFrame1 < animations.redVirusFrames1.length - 1) {
                animations.virusesFrame1++
            } else {
                animations.virusesFrame1 = 0
                for (let i = 0; i < animations.virusesKord.length; i++) {
                    if (animations.virusesKord[i] < animations.virusesKordy.length - 1) {
                        animations.virusesKord[i]++
                    } else {
                        animations.virusesKord[i] = 0
                    }
                }
            }
        }


        animations.redVirusFrames1[animations.virusesFrame1].rx = animations.virusesKordy[animations.virusesKord[0]].x
        animations.redVirusFrames1[animations.virusesFrame1].ry = animations.virusesKordy[animations.virusesKord[0]].y
        animations.yellowVirusFrames1[animations.virusesFrame1].rx = animations.virusesKordy[animations.virusesKord[1]].x
        animations.yellowVirusFrames1[animations.virusesFrame1].ry = animations.virusesKordy[animations.virusesKord[1]].y
        animations.blueVirusFrames1[animations.virusesFrame1].rx = animations.virusesKordy[animations.virusesKord[2]].x
        animations.blueVirusFrames1[animations.virusesFrame1].ry = animations.virusesKordy[animations.virusesKord[2]].y
        renderAny(animations.redVirusFrames1[animations.virusesFrame1], "rVirus")
        renderAny(animations.yellowVirusFrames1[animations.virusesFrame1], "yVirus")
        renderAny(animations.blueVirusFrames1[animations.virusesFrame1], "bVirus")
    }

    convertNumberToNapis(napisy["top"], 80, 80, "top", 7)
    convertNumberToNapis(napisy["score"], 80, 128, "score", 7)
    convertNumberToNapis(napisy["level"], 560, 240, "level", 2)
    convertNumberToNapis(napisy["virusy"], 560, 335, "virusy", 2)
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

function convertNumberToNapis(n: number, ox: number, oy: number, what: string, l: number) {
    let tempWord: string[] = []
    for (let i = 0; i < l - n.toString().length; i++) {
        tempWord.push("0")
    }
    for (let i = 0; i < n.toString().length; i++) {
        tempWord.push(n.toString()[i])
    }
    let word = tempWord.join("")
    let width = word.length * 16
    let part: obraz
    let parts: obraz[] = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "0") {
            part = { x: 1152, y: 0, w: 24, h: 24, rx: i * 16, ry: 0, rw: 16, rh: 16 }
        } else if (word[i] == "1") {
            part = { x: 1176, y: 0, w: 24, h: 24, rx: i * 16, ry: 0, rw: 16, rh: 16 }
        } else if (word[i] == "2") {
            part = { x: 1200, y: 0, w: 24, h: 24, rx: i * 16, ry: 0, rw: 16, rh: 16 }
        } else if (word[i] == "3") {
            part = { x: 1224, y: 0, w: 24, h: 24, rx: i * 16, ry: 0, rw: 16, rh: 16 }
        } else if (word[i] == "4") {
            part = { x: 1248, y: 0, w: 24, h: 24, rx: i * 16, ry: 0, rw: 16, rh: 16 }
        } else if (word[i] == "5") {
            part = { x: 1272, y: 0, w: 24, h: 24, rx: i * 16, ry: 0, rw: 16, rh: 16 }
        } else if (word[i] == "6") {
            part = { x: 1296, y: 0, w: 24, h: 24, rx: i * 16, ry: 0, rw: 16, rh: 16 }
        } else if (word[i] == "7") {
            part = { x: 1320, y: 0, w: 24, h: 24, rx: i * 16, ry: 0, rw: 16, rh: 16 }
        } else if (word[i] == "8") {
            part = { x: 1344, y: 0, w: 24, h: 24, rx: i * 16, ry: 0, rw: 16, rh: 16 }
        } else if (word[i] == "9") {
            part = { x: 1368, y: 0, w: 24, h: 24, rx: i * 16, ry: 0, rw: 16, rh: 16 }
        }
        parts.push(part)
    }
    renderMany(parts, ox, oy, width, 16, what)
}

function opadanie() {
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
    update()
    let zmiana = 0
    for (let i = main.height - 1; i >= 0; i--) {
        dane.pills.map((item, j) => {
            if (!item.flag) {
                if ((item.rotation == 0 || item.rotation == 2) && item.y1 == i) {
                    if (item.color1 != "white" && item.color2 != "white") {
                        if (main.tab[item.y2 + 1] != undefined && main.tab[item.y1 + 1] != undefined && main.tab[item.y1 + 1][item.x1] == 0 && main.tab[item.y2 + 1][item.x2] == 0) {
                            item.y1++
                            item.y2++
                            update()
                            zmiana++
                        }
                    } else if (item.color1 == "white" && item.color2 != "white") {
                        if (main.tab[item.y2 + 1] != undefined && main.tab[item.y2 + 1][item.x2] == 0) {
                            item.y1++
                            item.y2++
                            update()
                            zmiana++
                        }
                    } else if (item.color1 != "white" && item.color2 == "white") {
                        if (main.tab[item.y1 + 1] != undefined && main.tab[item.y1 + 1][item.x1] == 0) {
                            item.y1++
                            item.y2++
                            update()
                            zmiana++
                        }
                    }
                } else if (item.rotation == 1 && item.y2 == i) {
                    if (item.color2 != "white") {
                        if (main.tab[item.y2 + 1] != undefined && main.tab[item.y2 + 1][item.x2] == 0) {
                            item.y1++
                            item.y2++
                            update()
                            zmiana++
                        }
                    } else if (item.color1 != "white" && item.color2 == "white") {
                        if (main.tab[item.y1 + 1] != undefined && main.tab[item.y1 + 1][item.x1] == 0) {
                            item.y1++
                            update()
                            zmiana++
                        }
                    }
                } else if (item.rotation == 3 && item.y1 == i) {
                    if (item.color1 != "white") {
                        if (main.tab[item.y1 + 1] != undefined && main.tab[item.y1 + 1][item.x1] == 0) {
                            item.y1++
                            item.y2++
                            update()
                            zmiana++
                        }
                    } else if (item.color1 == "white" && item.color2 != "white") {
                        if (main.tab[item.y2 + 1] != undefined && main.tab[item.y2 + 1][item.x2] == 0) {
                            item.y2++
                            update()
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
        update()
    }
}

document.body.addEventListener("keydown", (e: KeyboardEvent) => {
    if (dane.state == "play") {
        if (e.code == "ArrowUp" || e.code == "KeyW") {
            makeRotation("ArrowUp")
        } else if (e.code == "ShiftLeft") {
            makeRotation("ShiftLeft")
        } else if (e.code == "KeyA" || e.code == "ArrowLeft") {
            makeMove("KeyA")
        } else if (e.code == "KeyD" || e.code == "ArrowRight") {
            makeMove("KeyD")
        } else if (e.code == "KeyS" || e.code == "ArrowDown") {
            makeMove("KeyS")
        }
    }
});

function makeMove(key: string) {
    update()
    let rotation = dane.pills[dane.kolejka].rotation
    let x1 = dane.pills[dane.kolejka].x1
    let x2 = dane.pills[dane.kolejka].x2
    let y1 = dane.pills[dane.kolejka].y1
    let y2 = dane.pills[dane.kolejka].y2

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
                workTick = 0
            } else if (workTick < 30) {
                workTick = 30
            }
        }
    }

    update()
}

function makeRotation(key: string) {
    update()
    let rotation = dane.pills[dane.kolejka].rotation
    let x1 = dane.pills[dane.kolejka].x1
    let x2 = dane.pills[dane.kolejka].x2
    let y1 = dane.pills[dane.kolejka].y1
    let y2 = dane.pills[dane.kolejka].y2

    if (rotation == 0) {
        if (main.tab[y1 - 1] != undefined) {
            if (main.tab[y1 - 1][x1] == 0) {
                if (key == "ShiftLeft") {
                    dane.pills[dane.kolejka].y1--
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].rotation++
                } else if (key == "ArrowUp") {
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].y2--
                    dane.pills[dane.kolejka].rotation = 3
                }
            } else {
                if (main.tab[y1 + 1][x1] == 0) {
                    if (key == "ShiftLeft") {
                        dane.pills[dane.kolejka].y2++
                        dane.pills[dane.kolejka].x2--
                        dane.pills[dane.kolejka].rotation++
                    } else if (key == "ArrowUp") {
                        dane.pills[dane.kolejka].y1++
                        dane.pills[dane.kolejka].x2--
                        dane.pills[dane.kolejka].rotation = 3
                    }
                }
            }
        } else {
            if (main.tab[y1 + 1][x1] == 0) {
                if (key == "ShiftLeft") {
                    dane.pills[dane.kolejka].y2++
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].rotation++
                } else if (key == "ArrowUp") {
                    dane.pills[dane.kolejka].y1++
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].rotation = 3
                }
            }
        }

    } else if (rotation == 1) {
        if (main.tab[y2][x2 + 1] != undefined) {
            if (main.tab[y2][x2 + 1] == 0) {
                if (key == "ShiftLeft") {
                    dane.pills[dane.kolejka].x1++
                    dane.pills[dane.kolejka].y1++
                    dane.pills[dane.kolejka].rotation++
                } else if (key == "ArrowUp") {
                    dane.pills[dane.kolejka].y1++
                    dane.pills[dane.kolejka].x2++
                    dane.pills[dane.kolejka].rotation--
                }
            } else {
                if (main.tab[y2][x2 - 1] == 0) {
                    if (key == "ShiftLeft") {
                        dane.pills[dane.kolejka].y1++
                        dane.pills[dane.kolejka].x2--
                        dane.pills[dane.kolejka].rotation++
                    } else if (key == "ArrowUp") {
                        dane.pills[dane.kolejka].y1++
                        dane.pills[dane.kolejka].x1--
                        dane.pills[dane.kolejka].rotation--
                    }
                }
            }
        } else {
            if (main.tab[y2][x2 - 1] == 0) {
                if (key == "ShiftLeft") {
                    dane.pills[dane.kolejka].y1++
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].rotation++
                } else if (key == "ArrowUp") {
                    dane.pills[dane.kolejka].y1++
                    dane.pills[dane.kolejka].x1--
                    dane.pills[dane.kolejka].rotation--
                }
            }
        }
    } else if (rotation == 2) {
        if (main.tab[y2 - 1] != undefined && main.tab[y2 - 1][x2] == 0) {
            if (key == "ShiftLeft") {
                dane.pills[dane.kolejka].x1--
                dane.pills[dane.kolejka].y2--
                dane.pills[dane.kolejka].rotation++
            } else if (key == "ArrowUp") {
                dane.pills[dane.kolejka].x1--
                dane.pills[dane.kolejka].y1--
                dane.pills[dane.kolejka].rotation--
            }
        }
    } else if (rotation == 3) {
        if (main.tab[y1][x1 + 1] != undefined) {
            if (main.tab[y1][x1 + 1] == 0) {
                if (key == "ShiftLeft") {
                    dane.pills[dane.kolejka].x2++
                    dane.pills[dane.kolejka].y2++
                    dane.pills[dane.kolejka].rotation = 0
                } else if (key == "ArrowUp") {
                    dane.pills[dane.kolejka].x1++
                    dane.pills[dane.kolejka].y2++
                    dane.pills[dane.kolejka].rotation--
                }
            } else {
                if (main.tab[y2][x1 - 1] == 0) {
                    if (key == "ShiftLeft") {
                        dane.pills[dane.kolejka].y2++
                        dane.pills[dane.kolejka].x1--
                        dane.pills[dane.kolejka].rotation = 0
                    } else if (key == "ArrowUp") {
                        dane.pills[dane.kolejka].y2++
                        dane.pills[dane.kolejka].x2--
                        dane.pills[dane.kolejka].rotation--
                    }
                }
            }
        } else {
            if (main.tab[y2][x1 - 1] == 0) {
                if (key == "ShiftLeft") {
                    dane.pills[dane.kolejka].y2++
                    dane.pills[dane.kolejka].x1--
                    dane.pills[dane.kolejka].rotation = 0
                } else if (key == "ArrowUp") {
                    dane.pills[dane.kolejka].y2++
                    dane.pills[dane.kolejka].x2--
                    dane.pills[dane.kolejka].rotation--
                }
            }
        }

    }
    update()
}

function createPill() {

    let tempCheck: number = 0
    for (let i = 0; i < dane.viruses.length; i++) {
        if (dane.viruses[i].color != "white") {
            tempCheck++
        }
    }

    if ((main.tab[0][(dane.width / 2) - 1] != 0 || main.tab[0][(dane.width / 2)] != 0)) {
        dane.state = "gameover"
    } else if (tempCheck == 0) {
        dane.state = "gamewin"
        if (napisy["top"] < napisy["score"]) {
            napisy["top"] = napisy["score"]
            localStorage.setItem("top", napisy["top"].toString());
        }
    } else {
        dane.kolejka++
        dane.state = "animacja"
    }
}

function checkKill() {
    update()
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
                dane.state = "kill"
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
                dane.state = "kill"
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
                item.zbicie1 = item.color1
                item.color1 = "white"
            }
            if (b == item.y2 && a.includes(item.x2)) {
                item.zbicie2 = item.color2
                item.color2 = "white"
            }
        })
        dane.viruses.map((item, i) => {
            if (b == item.y && a.includes(item.x)) {
                item.zbicie = item.color
                item.color = "white"
            }
        })
    } else {
        dane.pills.map((item, i) => {
            if (b == item.x1 && a.includes(item.y1)) {
                item.zbicie1 = item.color1
                item.color1 = "white"
            }
            if (b == item.x2 && a.includes(item.y2)) {
                item.zbicie2 = item.color2
                item.color2 = "white"
            }
        })
        dane.viruses.map((item, i) => {
            if (b == item.x && a.includes(item.y)) {
                item.zbicie = item.color
                item.color = "white"
            }
        })
    }
}


let tick: number = 0
let workTick: number = 0
let prevTimestamp: number
let fpsCh = new Date().getTime()
let oldFps = fpsCh - 1000
function refresh(timestamp: number) {
    if (timestamp != prevTimestamp) {
        prevTimestamp = timestamp
        render()

        if (dane.state == "play") {
            if (workTick % 40 == 0 && workTick != 0) {
                opadanie()
                update()
                workTick = 0
            }
        } else if (dane.state == "spadanie") {
            if (workTick % 4 == 0 && workTick != 0) {
                spadanie()
                workTick = 0
            }
        } else if (dane.state == "kill") {
            if (workTick % 8 == 0 && workTick != 0) {
                update()
                workTick = 0
                dane.state = "spadanie"
                dane.pills.map((item, i) => {
                    item.zbicie1 = "white"
                    item.zbicie2 = "white"
                })
                dane.viruses.map((item, i) => {
                    item.zbicie = "white"
                })
            }
        }
        else if (dane.state == "animacja") {
            if (workTick % 1 == 0 && workTick != 0) {
                dane.pill.x1 = animations.pillFrames[animations.pillFrame].x1
                dane.pill.y1 = animations.pillFrames[animations.pillFrame].y1
                dane.pill.x2 = animations.pillFrames[animations.pillFrame].x2
                dane.pill.y2 = animations.pillFrames[animations.pillFrame].y2
                dane.pill.rotation = animations.pillFrames[animations.pillFrame].rotation


                if (animations.pillFrame == 0) {
                    animations.armFrame = 0
                } else if (animations.pillFrame == 5) {
                    animations.armFrame = 1
                } else if (animations.pillFrame == 8) {
                    animations.armFrame = 2
                }
                animations.pillFrame++
            }
            if (animations.pillFrame == animations.pillFrames.length) {
                dane.state = "play"
                animations.pillFrame = 0
                animations.armFrame = 0

                dane.pill.x1 = 3
                dane.pill.y1 = 0
                dane.pill.x2 = 4
                dane.pill.y2 = 0
                dane.pill.Flag()
                dane.pills.push(dane.pill)
                dane.pill = new Pill(rnc(), rnc())
            }
        }

        if (workTick == 60) {
            workTick = 0
        } else {
            workTick++
        }

        if (tick == 60) {
            tick = 0
            document.getElementById("fps").innerText = "fps: " + Math.floor(60000 / (fpsCh - oldFps)).toString()
            oldFps = fpsCh
            fpsCh = new Date().getTime()

        } else {
            tick++
        }

    }

    window.requestAnimationFrame(refresh)
}
