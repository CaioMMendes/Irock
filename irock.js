function escrever() {
    var nome = prompt("Qual o seu nome?");
    var mudarImagem = document.getElementById("teste")
    mudarImagem.innerHTML = "<img class='theRockFeliz' src='https://cdn.discordapp.com/attachments/863259740808806421/1029505066815717427/unknown.png' alt='irock'>"

    var falaRocha = document.getElementById("falaRocha")
    falaRocha.innerHTML = "<img src='https://cdn.discordapp.com/attachments/958946333027348510/1029539415955095622/2560px-Speech_bubble.svg.png' width='75%' >"
    botao = document.getElementById("cadastrar")
    botao.style.display = 'none'
    var escritoRocha = document.getElementById("escrito")
    if (nome == null) {
        escritoRocha.innerHTML = "Oi "
    } else {
        escritoRocha.innerHTML = "Oi " + nome
    }

}