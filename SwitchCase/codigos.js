let RespostaCorreta = 0.
let RespostaIncorreta = 0
// Pergunta1
console.log("Em que dia estamos? ")
console.log("A - 25/03/2025")
console.log("B - 27/03/2027")
console.log("C - 20/03/2025")
console.log("D - 30/03/2020")
let pergunta1 = prompt("Digite a alternativa correta: ")
switch (pergunta1) {
case "A":
case "25/03/2025":
console.log("Alternativa correta!")
RespostaCorreta++
break
default:
console.log("Alternativa errada! ")
RespostaIncorreta++
}
// Pergunta2
console.log("Em qual ano estamos? ")
console.log("A - 2050")
console.log("B - 2025")
console.log("C - 2030")
console.log("D - 2060")
let pergunta2 = prompt("Digite a alternativa correta: ")
switch (pergunta2) {
case "B":
case "2025":
console.log("Alternativa correta!")
RespostaCorreta++
break
default:
console.log("Alternativa errada! ")
RespostaIncorreta++
}
// Pergunta3
console.log("Qual o maior time da Inglaterra? ")
console.log("A - Liverpool")
console.log("B - Manchester United")
console.log("C - Chelsea")

console.log("D - Manchester City")
let pergunta3 = prompt("Digite a alternativa correta: ")
switch (pergunta3) {
case "A":
case "Liverpool":
console.log("Alternativa correta!")
RespostaCorreta++
break
default:
console.log("Alternativa errada! ")
RespostaIncorreta++
}
// Pergunta4
console.log("Qual o maior estado do Brasil? ")
console.log("A - São Paulo")
console.log("B - Pará")
console.log("C - Mato Grosso")
console.log("D - Amazonas")
let pergunta4 = prompt("Digite a alternativa correta: ")
switch (pergunta4) {
case "D":
case "Amazonas":
console.log("Alternativa correta!")
RespostaCorreta++
break
default:
console.log("Alternativa errada! ")
RespostaIncorreta++
}
// Pergunta5
console.log("Qual o animal mais perigoso do mundo? ")
console.log("A - Crocodilo")
console.log("B - Tubarão-Branco")
console.log("C - Mosquito")
console.log("D - Água-Viva-Caixa")
let pergunta5 = prompt("Digite a alternativa correta: ")
switch (pergunta5) {
case "C":
case "Mosquito":
console.log("Alternativa correta!")
RespostaCorreta++
break

default:
console.log("Alternativa errada! ")
RespostaIncorreta++
}
// Pergunta6
console.log("Qual o filme mais assistido do mundo? ")
console.log("A - Avatar")
console.log("B - Vingadores: Ultimato")
console.log("C - Avatar: O Caminho da Água")
console.log("D - Titanic")
let pergunta6 = prompt("Digite a alternativa correta: ")
switch (pergunta6) {
case "A":
case "Avatar":
console.log("Alternativa correta!")
RespostaCorreta++
break
default:
console.log("Alternativa errada! ")
RespostaIncorreta++
}
// Pergunta7
console.log("Qual o melhor atleta do futebol? ")
console.log("A - Lionel Messi")
console.log("B - Pelé")
console.log("C - Diego Maradona")
console.log("D - Cristiano Ronaldo")
let pergunta7 = prompt("Digite a alternativa correta: ")
switch (pergunta7) {
case "B":
case "Pelé":
console.log("Alternativa correta!")
RespostaCorreta++
break
default:
console.log("Alternativa errada! ")
RespostaIncorreta++
}
// Pergunta8
console.log("Qual o maior país em questão de território do mundo? ")
console.log("A - Estados Unidos")

console.log("B - China")
console.log("C - Canadá")
console.log("D - Rússia")
let pergunta8 = prompt("Digite a alternativa correta: ")
switch (pergunta8) {
case "D":
case "Rússia":
console.log("Alternativa correta!")
RespostaCorreta++
break
default:
console.log("Alternativa errada! ")
RespostaIncorreta++
}
// Pergunta9
console.log("Qual o menor país em questão de território do mundo? ")
console.log("A - Vaticano")
console.log("B - Mônaco")
console.log("C - Nauru")
console.log("D - Tuvalu")
let pergunta9 = prompt("Digite a alternativa correta: ")
switch (pergunta9) {
case "A":
case "Vaticano":
console.log("Alternativa correta!")
RespostaCorreta++
break
default:
console.log("Alternativa errada! ")
RespostaIncorreta++
}
// Pergunta10
console.log("Qual o país mais perigoso do mundo? ")
console.log("A - Jamaica")
console.log("B - Honduras")
console.log("C - Venezuela")
console.log("D - Afeganistão")
let pergunta10 = prompt("Digite a alternativa correta: ")
switch (pergunta10) {
case "C":
case "Venezuela":
console.log("Alternativa correta!")

RespostaCorreta++
break
default:
console.log("Alternativa errada! ")
RespostaIncorreta++
}
// Exibir Resultado
console.log("\nResumo Final")
console.log("Respostas Corretas: " + RespostaCorreta)
console.log("Respostas Incorretas: " + RespostaIncorreta)
