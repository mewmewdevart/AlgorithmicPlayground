// ECMAScript 2015 (ES6) - Padronização JavaScript

// Variáveis declaradas com 'var'
var nome = 'Luiz';
var nome = 'Larissa'; // 'var' permite redeclaração, o que pode levar a bugs.
console.log(nome); // Saída: Larissa

// Variáveis declaradas com 'let'
let apelido = 'Luiz';
// let apelido = 'Larissa'; // ERRO: 'let' não permite redeclaração no mesmo escopo, garantindo maior previsibilidade.
apelido = 'Larissa'; // No entanto, você pode reatribuir um novo valor a uma variável 'let'.
console.log(apelido); // Saída: Larissa

// Variáveis sem declaração explícita
naoFacaIsso = 'Larissa'; // NÃO FAÇA ISSO! Variáveis sem 'var', 'let' ou 'const' tornam-se globais, poluindo o escopo e dificultando o rastreamento de dependências.
console.log(naoFacaIsso); // Saída: Larissa (em modo não-estrito, ou erro em modo estrito)