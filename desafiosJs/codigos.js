Desafio 1

let nome = prompt(&quot;digite seu nome: &quot;)
let idade = Number(prompt(&quot;digite a sua idade: &quot;))
let e_mail = prompt(&quot;digite seu e-mail: &quot;)
let telefone = prompt(&quot;digite seu telefone: &quot;)
console.log(&quot;Seu nome é&quot;, nome, &quot;mesmo?&quot;, &quot;Você realmente tem&quot;, idade, &quot;anos?&quot;,&quot;Esse&quot;,
e_mail, &quot;é seu e-mail?&quot;, telefone,&quot;é seu telefone?&quot;)

desafio 2

let ano_de_nascimento = prompt(&quot;digite sua data denascimento: &quot;)
ano_de_nascimento = Number(ano_de_nascimento)
let ano_atual = new Date().getFullYear()
let idade = ano_atual - ano_de_nascimento
console.log(&quot;Você tem &quot; + idade + &quot; anos.&quot;)