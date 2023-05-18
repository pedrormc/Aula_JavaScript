//05
var nome = prompt("Escreva o nome do aluno")
var n1 = Number(prompt("Escreva a nota 1"))
var n2 = Number(prompt("Escreva a nota 2"))
var n3 = Number(prompt("Escreva a nota 3"))


function media(){
  return ((n1+n2+n3)/3)
}
 window.alert(`Olá ${nome} sua média é de ${media()}`)

 media()>=8? window.alert('você foi aprovado') : window.alert('você foi reprovado')