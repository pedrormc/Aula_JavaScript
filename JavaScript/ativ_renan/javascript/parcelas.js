//04
var avst  = parseInt(prompt("Digite o valor do produto"))
var juros = parseInt(prompt("Digite o número de parcelas"))
var valparse
var total

switch (juros) {
    case 3:
        total = avst + ((avst/100)*10)
    break;

    case 5:
        total = avst + ((avst/100)*20)
    break;

}

window.alert(`preço a vista é de R$${avst},00 e parcelado em ${juros}x vezes o total a pagar é de R$${total},00`)