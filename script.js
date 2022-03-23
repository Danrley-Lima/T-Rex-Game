const background = document.querySelector(".background");
const dino = document.querySelector(".dino")

let isJumping = false
let position = 0
// TESTE AUDIO
let testeAudio = true

function handleKeyDown(e) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump()
        }
    }
}

function jump() {
    position = 0

    isJumping = true

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)

            // Jump Down
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval)
                    isJumping = false
                } else {
                    position -= 20
                    dino.style.bottom = position + "px"
                }
            }, 20)
            //  Jump
        } else {
            position += 20
            dino.style.bottom = position + "px"
        }

    }, 20)
}

function createCactus() {
    const cactus = document.createElement("div")
    let cactusPosition = 1000
    let randomTime = Math.random() * (4000 - 1000) + 1000;
    let teste = new Audio("./public/tome-.mp3")
    let teste1 = 0

    cactus.classList.add("cactus")
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game Over
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>'

            // TESTE AUDIO
            if (testeAudio) {
                teste.play()
                testeAudio = false
            }
        } else {
            cactusPosition -= 10
            cactus.style.left = cactusPosition + "px"
        }

    }, 20)

    teste1 == 1 ? teste1 = 0 : ""
    setTimeout(createCactus, randomTime)
    
    return;
}

createCactus()
document.addEventListener("keydown", handleKeyDown);