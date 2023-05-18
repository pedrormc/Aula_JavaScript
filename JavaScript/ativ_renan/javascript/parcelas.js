//04
var avst  = parseInt(prompt("Digite o valor do produto"))

window.alert("Qual será a forma de pagamento?")
var forma_pag = prompt("Digite [1] para pagamento a vista,  ou [2] para parcelado")

var valparse
var total

if (forma_pag == 1) {
    total = avst

    window.alert(`O preço total é de R$${avst},00. obrigado pela preferência!!`)
    
} else {
    var numparse = parseInt(prompt("Digite o número de parcelas de 3 a 5"))
    switch (numparse) {
        
         case 3:
            total = avst + ((avst/100)*10)
        break;
    
        case 4:
            total = avst + ((avst/100)*10)
        break;
    
        case 5:
            total = avst + ((avst/100)*20)
        break;

        default:
         window.alert(`código inválido`)
    
    }
    valparse = total/numparse

    window.alert(`O preço a vista é de R$${avst},00 e parcelado em ${numparse}x vezes o total a pagar é de R$${total},00!!`)

    window.alert(`O valor de cada parcela é de R$${valparse},00  agradecemos a preferência!!`)

}

