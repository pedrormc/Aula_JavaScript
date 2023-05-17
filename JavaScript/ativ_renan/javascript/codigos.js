var n1  = parseInt(prompt("Digite um número"))
var n2  = parseInt(prompt("Digite oto número"))
var cod = prompt("Digite o código para a operação")
var result

switch (codigo) {
    case cod == 1:
        result  = n1+n2
    break;

    case cod == 2:
      result  = n1*n2
    break;

    case cod == 3:
      result  = n1/n2
    break;
    
}

window.alert(`O resultado é ${result}`)