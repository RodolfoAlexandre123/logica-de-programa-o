Desafio 1

let nome = prompt(&quot;digite seu nome: &quot;)
let idade = Number(prompt(&quot;digite a sua idade: &quot;))
let e_mail = prompt(&quot;digite seu e-mail: &quot;)
let telefone = prompt(&quot;digite seu telefone: &quot;)
console.log(&quot;Seu nome �&quot;, nome, &quot;mesmo?&quot;, &quot;Voc� realmente tem&quot;, idade, &quot;anos?&quot;,&quot;Esse&quot;,
e_mail, &quot;� seu e-mail?&quot;, telefone,&quot;� seu telefone?&quot;)

desafio 2

let ano_de_nascimento = prompt(&quot;digite sua data denascimento: &quot;)
ano_de_nascimento = Number(ano_de_nascimento)
let ano_atual = new Date().getFullYear()
let idade = ano_atual - ano_de_nascimento
console.log(&quot;Voc� tem &quot; + idade + &quot; anos.&quot;)