Código Número 1

let idade = (prompt(&quot;Digite a sua idade: &quot;))
let categoria

if (idade &gt;= 60) {
categoria = &quot;Idosa&quot;
} else if (idade &gt; 18 &amp;&amp; idade &lt; 60) {
categoria = &quot;adulta&quot;
} else {
categoria = &quot;Criança&quot;
}

if (idade &gt;= 12 &amp;&amp; idade &lt;= 18) {
categoria = &quot;Adolescente&quot;
}

console.log(&quot;Categoria: &quot; + categoria)

if (idade &lt; 12) {

} else {
}

Código número 2
let idade = (prompt(&quot;Digite sua idade: &quot;))

if (idade &gt;= 18 &amp;&amp; idade &lt; 70) {
console.log(&quot;Voto obrigatório.&quot;)

} else if (idade &gt;= 16 &amp;&amp; idade &lt; 18) {
console.log(&quot;Voto facultativo.&quot;)
} else if (idade &gt;= 70) {
console.log(&quot;Voto facultativo.&quot;)
} else {
console.log(&quot;Não vota.&quot;)
}

Código número 3
let numero = (prompt(&quot;Escolha um númro positivo ou negativo: &quot;))

if (numero &gt; 0) {
console.log(&quot;Positivo&quot;)
} else if (numero &lt; 0) {
console.log(&quot;Negativo&quot;)
} else {
console.log(&quot;Zero&quot;)
}

Código número 4
let combustivel = (prompt(&quot;Escolha uma forma de abastecer: &quot;))

if (combustivel === &quot;Gasolina&quot;) {
console.log(&quot;Você escolheu Gasolina&quot;)
} else if (combustivel === &quot;Álcool&quot;) {
console.log(&quot;Você escolheu Diesel&quot;)
} else if (combustivel === &quot;Diesel&quot;) {
console.log(&quot;Você escolheu Diesel&quot;)

} else {
console.log(&quot;Opção inválida&quot;)
}

Código número 5
let velocidade = (prompt(&quot;Qual a velocidade que você passou na avenida: &quot;))

if (velocidade &gt;= 80) {
console.log(&quot;Multado&quot;)
} else if (velocidade &lt;= 60) {
console.log(&quot;Dentro do limite&quot;)
} else {
console.log(&quot;Atenção&quot;)
}
