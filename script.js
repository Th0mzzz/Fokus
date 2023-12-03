const html = document.querySelector("html")
const htmlContext = html.getAttribute("data-contexto")
const timeBtn = document.querySelectorAll(".app__card-button")
const img = document.querySelector(".app__image")
const title = document.querySelector(".app__title")
const musicbtn = document.querySelector("#alternar-musica")
const music = new Audio('/sons/luna-rise-part-one.mp3')
const startBtn = document.querySelector("#start-pause")
let timeDecorrido = 5;
let intervaloId = null;


timeBtn.forEach(btn => {
    let context = btn.getAttribute("data-contexto");
    btn.addEventListener("click", () => {

        html.setAttribute("data-contexto", context)
        img.setAttribute("src", `/imagens/${context}.png`)

        switch (context) {
            case "foco":
                title.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
                break;

            case "short":
                title.innerHTML = `
            Que tal dar uma respirada?,<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
                break;

            case "long":
                title.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa</strong>`
                break;

            default: break;
        }

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
        zerar()
        alert("tempo finalizado")
        return
    }
    timeDecorrido--
    console.log(timeDecorrido)

}

startBtn.addEventListener("click", iniciarPausar)

function iniciarPausar() {

    if (intervaloId) {
        zerar()
        return
    }

     = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}




