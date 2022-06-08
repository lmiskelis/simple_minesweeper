"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const lenta = document.querySelector(".lenta");
const endas = document.querySelector(".end");
const score = document.querySelector("h1");
const endasscore = document.querySelector("h2");
const btn = document.querySelector("button");
let bombos = [];
let skaicius = 0;
function Load100() {
    return __awaiter(this, void 0, void 0, function* () {
        endas.style.display = "none";
        lenta.innerHTML = "";
        for (let i = 0; i < 100; i++) {
            lenta.innerHTML += `<div id="${i - 1}" class="box"></div>`;
        }
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        reset();
        yield Load100();
        yield generateBombs();
        revealBombs();
    });
}
start();
function generateBombs() {
    return __awaiter(this, void 0, void 0, function* () {
        while (bombos.length < 10) {
            let z = Math.floor(Math.random() * 100);
            if (!bombos.includes(z)) {
                bombos.push(z);
            }
        }
        console.log(bombos);
    });
}
function revealBombs() {
    const boom = document.querySelectorAll(".box");
    boom.forEach(x => {
        x.addEventListener("click", function () {
            if (bombos.includes(Number(x.id) + 1)) {
                x.classList.add("bad");
                baigias(Number(x.id + 1));
            }
            else {
                if (x.classList.contains("good"))
                    return;
                else {
                    x.classList.add("good");
                    skaicius++;
                }
            }
            score.innerHTML = `Score:${skaicius}`;
        });
    });
}
function baigias(x) {
    const boom = document.querySelectorAll(".box");
    endas.style.display = "inline-block";
    endasscore.innerHTML = `<h2>Your total score is:${skaicius}</h2>`;
    lenta.classList.toggle("none");
    for (let i = 0; i < 100; i++) {
        if (bombos.includes(i)) {
            boom[i].classList.add("skipbad");
            //     console.log(boom[i])
        }
    }
}
btn.addEventListener("click", function () {
    start();
    lenta.classList.toggle("none");
});
function reset() {
    bombos = [];
    skaicius = 0;
    score.innerHTML = `Score:${skaicius}`;
}
