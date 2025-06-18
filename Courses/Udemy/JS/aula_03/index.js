/* 
Método:
Um método em JavaScript é uma função associada a um objeto.
Ou seja, é uma propriedade cujo valor é uma função.
Quando essa função é chamada através do objeto, ela é chamada de “método”.
Exemplo abaixo.
*/

// Exemplo de método:
const pessoa = {
  nome: "Larissa",
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

pessoa.saudacao(); // Saída: Olá, meu nome é Larissa

/* 
Strings em JavaScript podem ser declaradas com:
- Aspas duplas ("")
- Aspas simples ('')
- Template strings com crase (``) — permitem interpolação e múltiplas linhas
*/

// Exemplos básicos:
console.log("Hello World!");     // Aspas duplas
console.log('Hello World!');     // Aspas simples
console.log(`Hello World!`);     // Template string (crase)

// Strings com aspas internas:
console.log("Hello 'Larissa' World");      // Aspas simples dentro de aspas duplas
console.log('Hello "Larissa" World');      // Aspas duplas dentro de aspas simples
console.log("Hello \"Larissa\" World!");   // Aspas duplas escapadas com barra invertida
console.log(`Hello "o" 'o' World`);        // Crase permite usar ambos os tipos sem escapar

// Interpolação com template string:
const nome = "Larissa";
console.log(`Bem\-vinda, ${nome}!`);        // Variável dentro da string

// Template string com múltiplas linhas:
console.log(`
Linha 1
Linha 2
Linha 3
`);
