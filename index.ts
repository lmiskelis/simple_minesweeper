const lenta = document.querySelector(".lenta") as HTMLElement
const endas = document.querySelector(".end") as HTMLElement
const score = document.querySelector("h1") as HTMLElement
const endasscore = document.querySelector("h2") as HTMLElement
const btn = document.querySelector("button") as HTMLButtonElement

let bombos: number[] = []
let skaicius: number = 0
async function Load100() {
    endas.style.display = "none"
    lenta.innerHTML = ""
    for (let i = 0; i < 100; i++) {
        lenta.innerHTML += `<div id="${i - 1}" class="box"></div>`
    }

}
async function start() {
    reset()

    await Load100()
    await generateBombs()
    revealBombs()
}
start()

async function generateBombs() {

    while (bombos.length < 10) {
        let z = Math.floor(Math.random() * 100)
        if (!bombos.includes(z)) {
            bombos.push(z)
        }

    }
    console.log(bombos)
}

function revealBombs() {
    const boom = document.querySelectorAll(".box") as NodeListOf<HTMLElement>
    boom.forEach(x => {
        x.addEventListener("click", function () {
            if (bombos.includes(Number(x.id) + 1)) {
                x.classList.add("bad")

                baigias(Number(x.id + 1))

            }
            else {
                if (x.classList.contains("good")) return


                else {
                    x.classList.add("good")
                    skaicius++

                }

            }
            score.innerHTML = `Score:${skaicius}`
        })
    })
}

function baigias(x: number) {
    const boom = document.querySelectorAll(".box") as NodeListOf<HTMLElement>
    endas.style.display = "inline-block"
    endasscore.innerHTML = `<h2>Your total score is:${skaicius}</h2>`
    lenta.classList.toggle("none")

    for (let i = 0; i < 100; i++) {
        if (bombos.includes(i)) {
            boom[i].classList.add("skipbad")
            //     console.log(boom[i])
        }
    }



}
btn.addEventListener("click", function () {
    start()
    lenta.classList.toggle("none")
})
function reset() {
    bombos = []
    skaicius = 0
    score.innerHTML = `Score:${skaicius}`

}