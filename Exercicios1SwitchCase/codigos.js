// Exercicio 1
let idioma = prompt("Digite o idioma (Portugu�s, Ingl�s e Espanhol): ").toLowerCase()
switch (idioma) {
case "portugu�s":
console.log("Ol�")
break
case "ingl�s":
console.log("Hello")
break
case "espanhol":
console.log("Hola")
break
default:
console.log("Idioma n�o encontrado")
}
// Exercicio 2
let numero = Number(prompt("Digite uma n�mero de 1 a 7: "))
switch (numero) {
case 1:
console.log("Domingo")
break
case 2:
console.log("Segunda Feira")
break
case 3:
console.log("Ter�a Feira")
break
case 4:
console.log("Quarta Feira")
break
case 5:
console.log("Quinta Feira")
break
case 6:
console.log("Sexta Feira")
break
case 7:
console.log("S�bado")
break
default:
console.log("N�mero inv�lido")
}
// Exercicio 3
let transporte = Number(prompt("Escolha um transporte: 1-Carro, 2-Bicicleta, 3-�nibus: "))
switch (transporte) {
case 1:

console.log("Voc� escolheu Carro")
break
case 2:
console.log("Voc� escolheu Bicicleta")
break
case 3:
console.log("Voc� escolheu �nibus")
break
default:
console.log("Indisponivel")
}
//Exercicio 4
let urgencia = Number(prompt("Digite o n�vel de urg�ncia: 1-Baixa, 2-M�dia, 3-Alta: "))
switch (urgencia) {
case 1:
console.log("Urg�ncia Baixa")
break
case 2:
console.log("Urg�ncia M�dia")
break
case 3:
console.log("Urg�ncia Alta")
break
default:
console.log("Esse n�vel n�o existe")
}
//Exercicio 5
let mes = Number(prompt("Digite o n�mero do m�s para saber a fase da lua (1 a 12): "))
switch (mes) {
case 1:
case 2:
console.log("Fase: Lua Nova")
break
case 3:
case 4:
console.log("Fase: Quarto Crescente")
break
case 5:
case 6:
console.log("Fase: Lua Cheia")
break
case 7:
case 8:
console.log("Fase: Quarto Minguante")
break;
case 9:

case 10:
console.log("Fase: Lua Nova")
break
case 11:
case 12:
console.log("Fase: Lua Cheia")
break
default:
console.log("Esse m�s n�o existe")
}
//Exercicio 6
let categoria = prompt("Digite a categoria do ve�culo (compacto, suv, caminh�o):
").toLowerCase()
switch (categoria) {
case "compacto":
console.log("Ve�culo pequeno, ideal para cidade.")
break
case "suv":
console.log("Ve�culo espa�oso, ideal para fam�lia.")
break
case "caminh�o":
console.log("Ve�culo de carga pesada.")
break
default:
console.log("Categoria inv�lida.")
}
//Exercicio 7
let horas = Number(prompt("Quantas horas voc� ficou estacionado? "))
switch (true) {
case (horas <= 1):
console.log("Tarifa: R$10,00")
break
case (horas <= 3):
console.log("Tarifa: R$28,00")
break
case (horas <= 6):
console.log("Tarifa: R$65,00")
break
default:
console.log("Tarifa: R$100,00")
}
//Exercicio 8
let dificuldade = Number(prompt("Escolha a dificuldade: 1-F�cil, 2-M�dio, 3-Dif�cil: "))
switch (dificuldade) {
case 1:

console.log("Voc� escolheu o modo F�cil.")
break
case 2:
console.log("Voc� escolheu o modo M�dio.")
break
case 3:
console.log("Voc� escolheu o modo Dif�cil.")
break
default:
console.log("N�vel inv�lido.")
}
//Exercicio 9
let servico = prompt("Escolha o servi�o (yoga, musculacao, personal): ").toLowerCase()
switch (servico) {
case "yoga":
console.log("Aula de Yoga �s 8h e 19h.")
break
case "musculacao":
console.log("�rea de muscula��o dispon�vel o dia todo.")
break
case "personal":
console.log("Atendimento com personal trainer sob agendamento.")
break
default:
console.log("Servi�o n�o dispon�vel.")
}
//Exercicio 10
let ingresso = prompt("Escolha a categoria do ingresso (estudante, meia, inteira):
").toLowerCase()
switch (ingresso) {
case "estudante":
console.log("Pre�o: R$15,00")
break
case "meia":
console.log("Pre�o: R$25,00")
break
case "inteira":
console.log("Pre�o: R$50,00")
break
default:
console.log("Categoria inv�lida.")
}
//Exercicio 11
let idade = Number(prompt("Digite sua idade: "))
switch (true) {

case (idade <= 12):
console.log("N�vel: Leve")
break
case (idade <= 18):
console.log("N�vel: Moderado")
break
case (idade <= 40):
console.log("N�vel: Intenso")
break
default:
console.log("N�vel: Adaptado")
}
//Exercicio 12
let genero = prompt("Digite o g�nero musical (rock, samba, classico): ").toLowerCase()
switch (genero) {
case "rock":
console.log("Instrumento: Guitarra el�trica")
break
case "samba":
console.log("Instrumento: Pandeiro")
break
case "classico":
console.log("Instrumento: Violino")
break
default:
console.log("G�nero n�o encontrado.")
}
//Exercicio 13
let area = prompt("Digite a �rea (front-end, back-end, mobile): ").toLowerCase()
switch (area) {
case "front-end":
console.log("Curso: HTML, CSS e JavaScript")
break
case "back-end":
console.log("Curso: Node.js e banco de dados")
break
case "mobile":
console.log("Curso: React Native e Flutter")
break
default:
console.log("�rea inv�lida.")
}
//Exercicio 14
let idadeAtleta = Number(prompt("Digite a idade do atleta:"))
switch (true) {

case (idadeAtleta < 12):
console.log("N�vel: Iniciante")
break
case (idadeAtleta < 18):
console.log("N�vel: Intermedi�rio")
break
case (idadeAtleta < 35):
console.log("N�vel: Avan�ado")
break
default:
console.log("N�vel: Master")
}
let categoria = prompt("Escolha a categoria (basico, intermediario,
avancado):").toLowerCase()
switch (categoria) {
case "basico":
console.log("Desafios com adi��o e subtra��o.")
break
case "intermediario":
console.log("Desafios com multiplica��o e divis�o.")
break
case "avancado":
console.log("Desafios com �lgebra e l�gica.")
break
default:
console.log("Categoria inv�lida.")
