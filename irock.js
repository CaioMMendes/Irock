var mudarImagem = document.getElementById("imagemTriste")
var out
console.log(mudarImagem)
tempoDelay()
var primeiraVez = 0

var nome
cookie()

function escrever() {
    var numeroRandom = parseInt(Math.random() * 11);
    if (primeiraVez == 0) {
        nome = prompt("Qual o seu nome?");
        primeiraVez = 1
    }

    // var mudarImagem = document.getElementById("teste")
    // mudarImagem.innerHTML = "<img class='theRockFeliz' src='https://cdn.discordapp.com/attachments/863259740808806421/1029505066815717427/unknown.png' alt='irock'>"


    if (numeroRandom == 5) {
        mudarImagem = document.getElementById("imagemTriste")
        mudarImagem.src = 'https://cdn.discordapp.com/attachments/958946333027348510/1031574453957709885/unknown.png'
        var falaRocha = document.getElementById("falaRocha")
        falaRocha.innerHTML = ""
        var escritoRocha = document.getElementById("escrito")
        escritoRocha.innerHTML = ""
        clearTimeout(out)
        tempoDelay()
    } else {



        var falaRocha = document.getElementById("falaRocha")
        falaRocha.innerHTML = "<img src='https://cdn.discordapp.com/attachments/958946333027348510/1029539415955095622/2560px-Speech_bubble.svg.png' width='75%' >"
        botao = document.getElementById("cadastrar")
        // botao.style.display = 'none'

        mudarImagem = document.getElementById("imagemTriste")
        mudarImagem.src = 'https://cdn.discordapp.com/attachments/863259740808806421/1029505066815717427/unknown.png'
        mudarImagem.class = 'theRockFeliz'



        var escritoRocha = document.getElementById("escrito")
        if (nome == null) {
            escritoRocha.innerHTML = "Oi "
        } else {
            escritoRocha.innerHTML = "Oi " + nome
        }
        clearTimeout(out)
        tempoDelay()
    }
}

function solitaria() {
    mudarImagem = document.getElementById("imagemTriste")
    mudarImagem.src = 'https://cdn.discordapp.com/attachments/958946333027348510/1031574296801316975/unknown.png'
    var falaRocha = document.getElementById("falaRocha")
    falaRocha.innerHTML = ""
    var escritoRocha = document.getElementById("escrito")
    escritoRocha.innerHTML = ""

}


function tempoDelay() {
    out = setTimeout(solitaria, 25000)


}




function cookie() {
    var testeImagem = Cookies.get('triste')
    if (typeof (testeImagem) != 'undefined') {
        mudarImagem = document.getElementById("imagemTriste")
        mudarImagem.src = `${testeImagem}`
        console.log(mudarImagem)
        console.log(testeImagem)
    } else {
        Cookies.set('triste', 'https://cdn.discordapp.com/attachments/958946333027348510/1031979638848761896/unknown.png', 1)
    }
}