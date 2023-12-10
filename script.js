const html = document.querySelector("html")
const htmlContext = html.getAttribute("data-contexto")
const timeBtn = document.querySelectorAll(".app__card-button")
const img = document.querySelector(".app__image")
const title = document.querySelector(".app__title")
const musicbtn = document.querySelector("#alternar-musica")
const music = new Audio('/sons/luna-rise-part-one.mp3')
const startMusic = new Audio("sons/play.wav")
const endMusic = new Audio("sons/beep.mp3")
const pauseMusic = new Audio("sons/pause.mp3")
const startBtn = document.querySelector("#start-pause")
const startBtnText = document.querySelector("#start-pause span")
const startBtnImg = document.querySelector("#start-pause img")
let timeDecorrido = 1;
let intervaloId = null;
const timer = document.querySelector("#timer")




timeBtn.forEach(btn => {
    let context = btn.getAttribute("data-contexto");
    btn.addEventListener("click", () => {

        html.setAttribute("data-contexto", context)
        img.setAttribute("src", `/imagens/${context}.png`)
        zerar()
        switch (context) {
            case "foco":
                title.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
                timeDecorrido = 1500
                break;

            case "short":
                title.innerHTML = `
            Que tal dar uma respirada?,<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
                timeDecorrido = 300
                break;

            case "long":
                title.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa</strong>`
                timeDecorrido = 900

                break;

            default: break;
        }
        mostrarTimer()

        timeBtn.forEach(button => button.classList.remove("active"))

        btn.classList.add('active')

    })
})

// Musica
music.loop = true

musicbtn.addEventListener("change", () => {
    if (music.paused) {
        music.play()
    } else {
        music.pause()
    }

})


const contagemRegressiva = () => {

    if (timeDecorrido <= 0) {
        endMusic.play()
        alert("Tempo Finalizado!")
        if (htmlContext == "foco") {
            const event = new CustomEvent("FocoFinalizado")
            document.dispatchEvent(event)
        }
        zerar()
        return
    }
    timeDecorrido--
    mostrarTimer()


}

startBtn.addEventListener("click", iniciarPausar)

function iniciarPausar() {

    if (intervaloId) {
        zerar()
        return
    }

    startMusic.play()
    startBtnText.textContent = "Pausar"
    startBtnImg.src = "imagens/pause.png"
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    startBtnText.textContent = "Começar"
    startBtnImg.src = "imagens/play_arrow.png"
    pauseMusic.play()
    clearInterval(intervaloId)
    intervaloId = null
}

function mostrarTimer() {
    const time = new Date(timeDecorrido * 1000)
    const timeFormate = time.toLocaleTimeString("pt-br", { minute: "2-digit", second: "2-digit" })
    timer.innerHTML = `${timeFormate}`
}



mostrarTimer()
