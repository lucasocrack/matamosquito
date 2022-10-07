var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var posicaoX = Math.random() * largura
var posicaoY = Math.random() * altura

console.log(posicaoX, posicaoY)