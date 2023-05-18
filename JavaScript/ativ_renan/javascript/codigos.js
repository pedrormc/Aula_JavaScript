//06
var n1  = parseInt(prompt("Digite um número"))
var n2  = parseInt(prompt("Digite oto número"))

var cod = parseInt (prompt("Digite o código para a operação"))
var resultado

switch (cod) {
    case 1:
      resultado = (n1 + n2)
      break;
    case 2:
      resultado = (n1 * n2)
      break;
    case 3:
      resultado =  (n1 / n2)
      break;
    default:
      window.alert("Código de seleção inválido. Por favor, digite 1, 2 ou 3.");
      
  }


window.alert(`O resultado é ${resultado}`)