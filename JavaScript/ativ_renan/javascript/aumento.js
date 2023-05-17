var   nome  = prompt("Digite seu nome")
var salario = Number(prompt("Digite seu salário atual"))

function aumento(){
    return salario = salario + (( salario/100)*10)

}
window.alert(`Olá ${nome} seu novo salário é de ${aumento()}`)