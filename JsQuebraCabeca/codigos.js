C�digo N�mero 1

let idade = (prompt(&quot;Digite a sua idade: &quot;))
let categoria

if (idade &gt;= 60) {
categoria = &quot;Idosa&quot;
} else if (idade &gt; 18 &amp;&amp; idade &lt; 60) {
categoria = &quot;adulta&quot;
} else {
categoria = &quot;Crian�a&quot;
}

if (idade &gt;= 12 &amp;&amp; idade &lt;= 18) {
categoria = &quot;Adolescente&quot;
}

console.log(&quot;Categoria: &quot; + categoria)

if (idade &lt; 12) {

} else {
}

C�digo n�mero 2
let idade = (prompt(&quot;Digite sua idade: &quot;))

if (idade &gt;= 18 &amp;&amp; idade &lt; 70) {
console.log(&quot;Voto obrigat�rio.&quot;)

} else if (idade &gt;= 16 &amp;&amp; idade &lt; 18) {
console.log(&quot;Voto facultativo.&quot;)
} else if (idade &gt;= 70) {
console.log(&quot;Voto facultativo.&quot;)
} else {
console.log(&quot;N�o vota.&quot;)
}

C�digo n�mero 3
let numero = (prompt(&quot;Escolha um n�mro positivo ou negativo: &quot;))

if (numero &gt; 0) {
console.log(&quot;Positivo&quot;)
} else if (numero &lt; 0) {
console.log(&quot;Negativo&quot;)
} else {
console.log(&quot;Zero&quot;)
}

C�digo n�mero 4
let combustivel = (prompt(&quot;Escolha uma forma de abastecer: &quot;))

if (combustivel === &quot;Gasolina&quot;) {
console.log(&quot;Voc� escolheu Gasolina&quot;)
} else if (combustivel === &quot;�lcool&quot;) {
console.log(&quot;Voc� escolheu Diesel&quot;)
} else if (combustivel === &quot;Diesel&quot;) {
console.log(&quot;Voc� escolheu Diesel&quot;)

} else {
console.log(&quot;Op��o inv�lida&quot;)
}

C�digo n�mero 5
let velocidade = (prompt(&quot;Qual a velocidade que voc� passou na avenida: &quot;))

if (velocidade &gt;= 80) {
console.log(&quot;Multado&quot;)
} else if (velocidade &lt;= 60) {
console.log(&quot;Dentro do limite&quot;)
} else {
console.log(&quot;Aten��o&quot;)
}
