/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets.ts":
/*!***********************!*\
  !*** ./src/assets.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pill\": () => (/* binding */ Pill),\n/* harmony export */   \"Plansza\": () => (/* binding */ Plansza),\n/* harmony export */   \"Virus\": () => (/* binding */ Virus),\n/* harmony export */   \"dane\": () => (/* binding */ dane)\n/* harmony export */ });\nvar Plansza = /** @class */ (function () {\n    function Plansza(width, height, size) {\n        this.width = width;\n        this.height = height;\n        this.size = size;\n        this.tab = [];\n        this.plansza = document.createElement(\"div\");\n        this.plansza.id = \"plansza\";\n        this.plansza.style.width = this.size * width + \"px\";\n        this.generateMap();\n    }\n    Plansza.prototype.generateMap = function () {\n        for (var i = 0; i < this.height; i++) {\n            this.tab[i] = [];\n            for (var j = 0; j < this.width; j++) {\n                var pole = document.createElement(\"div\");\n                pole.style.width = this.size + \"px\";\n                pole.style.height = this.size + \"px\";\n                pole.className = \"pole\";\n                pole.id = i + \"|\" + j;\n                this.tab[i][j] = 0;\n                this.plansza.append(pole);\n            }\n        }\n        document.body.append(this.plansza);\n    };\n    return Plansza;\n}());\n\nvar Pill = /** @class */ (function () {\n    function Pill(color1, color2) {\n        this.x1 = Math.floor((dane.width / 2) - 1);\n        this.y1 = 0;\n        this.x2 = Math.floor((dane.width / 2));\n        this.y2 = 0;\n        this.color1 = color1;\n        this.color2 = color2;\n        this.rotation = 0;\n        this.flag = true;\n    }\n    Pill.prototype.deFlag = function () {\n        this.flag = false;\n    };\n    return Pill;\n}());\n\nvar Virus = /** @class */ (function () {\n    function Virus() {\n        this.x = Math.floor(Math.random() * 1);\n    }\n    return Virus;\n}());\n\nvar dane = {\n    kolejka: 0,\n    wynik: 0,\n    pills: [],\n    width: 6,\n    height: 10\n};\n\n\n//# sourceURL=webpack://doktorek/./src/assets.ts?");

/***/ }),

/***/ "./src/functions.ts":
/*!**************************!*\
  !*** ./src/functions.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rnc\": () => (/* binding */ rnc)\n/* harmony export */ });\nfunction rnc() {\n    var main = Math.floor(Math.random() * 3);\n    if (main == 0) {\n        return \"red\";\n    }\n    else if (main == 1) {\n        return \"yellow\";\n    }\n    else if (main == 2) {\n        return \"blue\";\n    }\n    else {\n        return \"red\";\n    }\n}\n\n\n//# sourceURL=webpack://doktorek/./src/functions.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ \"./src/assets.ts\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.ts\");\n\n\nvar main = new _assets__WEBPACK_IMPORTED_MODULE_0__.Plansza(_assets__WEBPACK_IMPORTED_MODULE_0__.dane.width, _assets__WEBPACK_IMPORTED_MODULE_0__.dane.height, 40);\n_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka] = new _assets__WEBPACK_IMPORTED_MODULE_0__.Pill((0,_functions__WEBPACK_IMPORTED_MODULE_1__.rnc)(), (0,_functions__WEBPACK_IMPORTED_MODULE_1__.rnc)());\nrender();\nfunction render() {\n    main.tab.map(function (item, i) {\n        item.map(function (poditem, j) {\n            main.tab[i][j] = 0;\n            document.getElementById(i + \"|\" + j).style.backgroundColor = \"white\";\n            document.getElementById(i + \"|\" + j).innerText = \"0\";\n        });\n    });\n    for (var i = 0; i < _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills.length; i++) {\n        document.getElementById(_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y1 + \"|\" + _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x1).style.backgroundColor = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].color1;\n        document.getElementById(_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y2 + \"|\" + _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x2).style.backgroundColor = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].color2;\n        if (_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].color1 == \"red\") {\n            main.tab[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y1][_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x1] = 1;\n        }\n        else if (_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].color1 == \"yellow\") {\n            main.tab[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y1][_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x1] = 2;\n        }\n        else if (_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].color1 == \"blue\") {\n            main.tab[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y1][_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x1] = 3;\n        }\n        if (_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].color2 == \"red\") {\n            main.tab[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y2][_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x2] = 1;\n        }\n        else if (_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].color2 == \"yellow\") {\n            main.tab[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y2][_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x2] = 2;\n        }\n        else if (_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].color2 == \"blue\") {\n            main.tab[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y2][_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x2] = 3;\n        }\n        document.getElementById(_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y1 + \"|\" + _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x1).innerText = main.tab[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y1][_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x1].toString();\n        document.getElementById(_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y2 + \"|\" + _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x2).innerText = main.tab[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].y2][_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[i].x2].toString();\n    }\n    main.tab[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills.length - 1].y1][_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills.length - 1].x1] = 9;\n    main.tab[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills.length - 1].y2][_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills.length - 1].x2] = 9;\n}\nfunction gravity() {\n    var rotation = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation;\n    var x1 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1;\n    var x2 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2;\n    var y1 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1;\n    var y2 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2;\n    if (rotation == 1) {\n        if ((y2 + 1) == main.height || main.tab[y2 + 1][x2] == 1 || main.tab[y2 + 1][x2] == 2 || main.tab[y2 + 1][x2] == 3) {\n            createPill();\n            checkKill();\n        }\n        else {\n            _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n            _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n        }\n    }\n    else if (rotation == 3) {\n        if ((y1 + 1) == main.height || main.tab[y1 + 1][x1] == 1 || main.tab[y1 + 1][x1] == 2 || main.tab[y1 + 1][x1] == 3) {\n            createPill();\n            checkKill();\n        }\n        else {\n            _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n            _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n        }\n    }\n    else {\n        if ((y1 + 1) == main.height || (y2 + 1) == main.height || main.tab[y1 + 1][x1] == 1 || main.tab[y1 + 1][x1] == 2 || main.tab[y1 + 1][x1] == 3 || main.tab[y2 + 1][x2] == 1 || main.tab[y2 + 1][x2] == 2 || main.tab[y2 + 1][x2] == 3) {\n            createPill();\n            checkKill();\n        }\n        else {\n            _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n            _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n        }\n    }\n    // for (let w = main.height - 1; w >= 0; w--) {\n    // }\n    // for (let i = 0; i < dane.pills.length; i++) {\n    //     if (dane.pills[i].y < main.height && dane.pills[i].pole2.y < main.height) {\n    //         dane.pills[i].pole1.y += 1\n    //         dane.pills[i].pole2.y += 1\n    //     }\n    // }\n}\ndocument.body.addEventListener(\"keydown\", function (e) {\n    if (e.code == \"KeyQ\") {\n        makeRotation(\"KeyQ\");\n    }\n    else if (e.code == \"KeyE\") {\n        makeRotation(\"KeyE\");\n    }\n    else if (e.code == \"KeyA\") {\n        makeMove(\"KeyA\");\n    }\n    else if (e.code == \"KeyD\") {\n        makeMove(\"KeyD\");\n    }\n    else if (e.code == \"KeyS\") {\n        makeMove(\"KeyS\");\n    }\n});\nfunction makeMove(key) {\n    render();\n    var rotation = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation;\n    var x1 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1;\n    var x2 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2;\n    var y1 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1;\n    var y2 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2;\n    // if (rotation == 0) {\n    // } else if (rotation == 1) {\n    // } else if (rotation == 2) {\n    // } else if (rotation == 3) {\n    // }\n    if (key == \"KeyA\") {\n        if (main.tab[y1][x1 - 1] != undefined && main.tab[y2][x2 - 1] != undefined) {\n            if ((main.tab[y1][x1 - 1] == 0 || main.tab[y1][x1 - 1] == 9) && (main.tab[y2][x2 - 1] == 0 || main.tab[y2][x2 - 1] == 9)) {\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1--;\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n            }\n        }\n    }\n    else if (key == \"KeyD\") {\n        if (main.tab[y1][x1 + 1] != undefined && main.tab[y2][x2 + 1] != undefined) {\n            if ((main.tab[y1][x1 + 1] == 0 || main.tab[y1][x1 + 1] == 9) && (main.tab[y2][x2 + 1] == 0 || main.tab[y2][x2 + 1] == 9)) {\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1++;\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2++;\n            }\n        }\n    }\n    else if (key == \"KeyS\") {\n        if (main.tab[y1 + 1] != undefined && main.tab[y2 + 1] != undefined) {\n            if ((main.tab[y1 + 1][x1] == 0 || main.tab[y1 + 1][x1] == 9) && (main.tab[y2 + 1][x2] == 0 || main.tab[y2 + 1][x2] == 9)) {\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n            }\n        }\n    }\n    render();\n}\nfunction makeRotation(key) {\n    render();\n    var rotation = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation;\n    var x1 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1;\n    var x2 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2;\n    var y1 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1;\n    var y2 = _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2;\n    if (rotation == 0) {\n        if (main.tab[y1 - 1] != undefined) {\n            if (main.tab[y1 - 1][x1] == 0) {\n                if (key == \"KeyE\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1--;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation++;\n                }\n                else if (key == \"KeyQ\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2--;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation = 3;\n                }\n            }\n            else {\n                if (main.tab[y1 + 1][x1] == 0) {\n                    if (key == \"KeyE\") {\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation++;\n                    }\n                    else if (key == \"KeyQ\") {\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation = 3;\n                    }\n                }\n            }\n        }\n        else {\n            if (main.tab[y1 + 1][x1] == 0) {\n                if (key == \"KeyE\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation++;\n                }\n                else if (key == \"KeyQ\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation = 3;\n                }\n            }\n        }\n    }\n    else if (rotation == 1) {\n        if (main.tab[y2][x2 + 1] != undefined) {\n            if (main.tab[y2][x2 + 1] == 0) {\n                if (key == \"KeyE\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation++;\n                }\n                else if (key == \"KeyQ\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation--;\n                }\n            }\n            else {\n                if (main.tab[y2][x2 - 1] == 0) {\n                    if (key == \"KeyE\") {\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation++;\n                    }\n                    else if (key == \"KeyQ\") {\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1--;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation--;\n                    }\n                }\n            }\n        }\n        else {\n            if (main.tab[y2][x2 - 1] == 0) {\n                if (key == \"KeyE\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation++;\n                }\n                else if (key == \"KeyQ\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1--;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation--;\n                }\n            }\n        }\n    }\n    else if (rotation == 2) {\n        if (main.tab[y2 - 1] != undefined && main.tab[y2 - 1][x2] == 0) {\n            if (key == \"KeyE\") {\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1--;\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2--;\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation++;\n            }\n            else if (key == \"KeyQ\") {\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1--;\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y1--;\n                _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation--;\n            }\n        }\n    }\n    else if (rotation == 3) {\n        if (main.tab[y1][x1 + 1] != undefined) {\n            if (main.tab[y1][x1 + 1] == 0) {\n                if (key == \"KeyE\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation = 0;\n                }\n                else if (key == \"KeyQ\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation--;\n                }\n            }\n            else {\n                if (main.tab[y2][x1 - 1] == 0) {\n                    if (key == \"KeyE\") {\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1--;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation = 0;\n                    }\n                    else if (key == \"KeyQ\") {\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n                        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation--;\n                    }\n                }\n            }\n        }\n        else {\n            if (main.tab[y2][x1 - 1] == 0) {\n                if (key == \"KeyE\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x1--;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation = 0;\n                }\n                else if (key == \"KeyQ\") {\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].y2++;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].x2--;\n                    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].rotation--;\n                }\n            }\n        }\n    }\n    render();\n}\nfunction createPill() {\n    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka].deFlag();\n    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka++;\n    _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills[_assets__WEBPACK_IMPORTED_MODULE_0__.dane.kolejka] = new _assets__WEBPACK_IMPORTED_MODULE_0__.Pill((0,_functions__WEBPACK_IMPORTED_MODULE_1__.rnc)(), (0,_functions__WEBPACK_IMPORTED_MODULE_1__.rnc)());\n}\nfunction checkKill() {\n    render();\n    for (var i = 0; i < main.height; i++) {\n        var poziom = [];\n        for (var j = 0; j < main.width; j++) {\n            if (poziom.length == 0) {\n                poziom.push(j);\n            }\n            if (main.tab[i][j + 1] != undefined && main.tab[i][j + 1] != 0 && main.tab[i][j] == main.tab[i][j + 1]) {\n                poziom.push(j + 1);\n            }\n            else if (poziom.length >= 4) {\n                kill(poziom, i, false);\n            }\n            else {\n                poziom.length = 0;\n            }\n        }\n    }\n}\nfunction kill(a, b, rev) {\n    if (!rev) {\n        _assets__WEBPACK_IMPORTED_MODULE_0__.dane.pills.map(function (item, i) {\n            if (b == item.y1 && a.includes(item.x1)) {\n                item.color1 = \"white\";\n                console.log(\"Kill: \" + item.y1 + \"-\" + item.x1);\n            }\n            if (b == item.y2 && a.includes(item.x2)) {\n                item.color2 = \"white\";\n                console.log(\"Kill: \" + item.y2 + \"-\" + item.x2);\n            }\n        });\n    }\n    else {\n    }\n}\nsetInterval(function () {\n    gravity();\n    render();\n}, 1000);\n\n\n//# sourceURL=webpack://doktorek/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	__webpack_require__("./src/assets.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions.ts");
/******/ 	
/******/ })()
;