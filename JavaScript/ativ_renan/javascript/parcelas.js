var avst  = parseInt(prompt("Digite o valor do produto"))
var numparse = parseInt(prompt("Digite o número de parcelas"))
var valparse
var total

switch (juros) {
    case numparse < 3:
        total = avst
    break;

    case numparse == 3:
        total = avst + ((avst/100)*10)
    break;

    case numparse == 4:
        total = avst + ((avst/100)*10)
    break;

    case numparse >= 5:
        total = avst + ((avst/100)*20)
    break;
}

window.alert(`preço a vista é de R$${avst},00 e parcelado em ${numparse}x vezes o total a pagar é de R$${total},00`)