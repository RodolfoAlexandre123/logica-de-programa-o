// Exercicio 1
let idioma = prompt("Digite o idioma (Português, Inglês e Espanhol): ").toLowerCase()
switch (idioma) {
case "português":
console.log("Olá")
break
case "inglês":
console.log("Hello")
break
case "espanhol":
console.log("Hola")
break
default:
console.log("Idioma não encontrado")
}
// Exercicio 2
let numero = Number(prompt("Digite uma número de 1 a 7: "))
switch (numero) {
case 1:
console.log("Domingo")
break
case 2:
console.log("Segunda Feira")
break
case 3:
console.log("Terça Feira")
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
console.log("Sábado")
break
default:
console.log("Número inválido")
}
// Exercicio 3
let transporte = Number(prompt("Escolha um transporte: 1-Carro, 2-Bicicleta, 3-Ônibus: "))
switch (transporte) {
case 1:

console.log("Você escolheu Carro")
break
case 2:
console.log("Você escolheu Bicicleta")
break
case 3:
console.log("Você escolheu Ônibus")
break
default:
console.log("Indisponivel")
}
//Exercicio 4
let urgencia = Number(prompt("Digite o nível de urgência: 1-Baixa, 2-Média, 3-Alta: "))
switch (urgencia) {
case 1:
console.log("Urgência Baixa")
break
case 2:
console.log("Urgência Média")
break
case 3:
console.log("Urgência Alta")
break
default:
console.log("Esse nível não existe")
}
//Exercicio 5
let mes = Number(prompt("Digite o número do mês para saber a fase da lua (1 a 12): "))
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
console.log("Esse mês não existe")
}
//Exercicio 6
let categoria = prompt("Digite a categoria do veículo (compacto, suv, caminhão):
").toLowerCase()
switch (categoria) {
case "compacto":
console.log("Veículo pequeno, ideal para cidade.")
break
case "suv":
console.log("Veículo espaçoso, ideal para família.")
break
case "caminhão":
console.log("Veículo de carga pesada.")
break
default:
console.log("Categoria inválida.")
}
//Exercicio 7
let horas = Number(prompt("Quantas horas você ficou estacionado? "))
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
let dificuldade = Number(prompt("Escolha a dificuldade: 1-Fácil, 2-Médio, 3-Difícil: "))
switch (dificuldade) {
case 1:

console.log("Você escolheu o modo Fácil.")
break
case 2:
console.log("Você escolheu o modo Médio.")
break
case 3:
console.log("Você escolheu o modo Difícil.")
break
default:
console.log("Nível inválido.")
}
//Exercicio 9
let servico = prompt("Escolha o serviço (yoga, musculacao, personal): ").toLowerCase()
switch (servico) {
case "yoga":
console.log("Aula de Yoga às 8h e 19h.")
break
case "musculacao":
console.log("Área de musculação disponível o dia todo.")
break
case "personal":
console.log("Atendimento com personal trainer sob agendamento.")
break
default:
console.log("Serviço não disponível.")
}
//Exercicio 10
let ingresso = prompt("Escolha a categoria do ingresso (estudante, meia, inteira):
").toLowerCase()
switch (ingresso) {
case "estudante":
console.log("Preço: R$15,00")
break
case "meia":
console.log("Preço: R$25,00")
break
case "inteira":
console.log("Preço: R$50,00")
break
default:
console.log("Categoria inválida.")
}
//Exercicio 11
let idade = Number(prompt("Digite sua idade: "))
switch (true) {

case (idade <= 12):
console.log("Nível: Leve")
break
case (idade <= 18):
console.log("Nível: Moderado")
break
case (idade <= 40):
console.log("Nível: Intenso")
break
default:
console.log("Nível: Adaptado")
}
//Exercicio 12
let genero = prompt("Digite o gênero musical (rock, samba, classico): ").toLowerCase()
switch (genero) {
case "rock":
console.log("Instrumento: Guitarra elétrica")
break
case "samba":
console.log("Instrumento: Pandeiro")
break
case "classico":
console.log("Instrumento: Violino")
break
default:
console.log("Gênero não encontrado.")
}
//Exercicio 13
let area = prompt("Digite a área (front-end, back-end, mobile): ").toLowerCase()
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
console.log("Área inválida.")
}
//Exercicio 14
let idadeAtleta = Number(prompt("Digite a idade do atleta:"))
switch (true) {

case (idadeAtleta < 12):
console.log("Nível: Iniciante")
break
case (idadeAtleta < 18):
console.log("Nível: Intermediário")
break
case (idadeAtleta < 35):
console.log("Nível: Avançado")
break
default:
console.log("Nível: Master")
}
let categoria = prompt("Escolha a categoria (basico, intermediario,
avancado):").toLowerCase()
switch (categoria) {
case "basico":
console.log("Desafios com adição e subtração.")
break
case "intermediario":
console.log("Desafios com multiplicação e divisão.")
break
case "avancado":
console.log("Desafios com álgebra e lógica.")
break
default:
console.log("Categoria inválida.")
