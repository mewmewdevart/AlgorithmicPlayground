// 6. Função sem parâmetros, mas que aceita todos os argumentos via `arguments`
// ⚠️ O objeto `arguments` só existe em funções declaradas com `function`, não funciona com arrow functions.

function funcao() {
    console.log(arguments); // `arguments` é um objeto semelhante a array
}

funcao('valor', 1, 2, 3, 4, 5);
// Mesmo sem parâmetros definidos, a função consegue acessar todos os argumentos enviados

// ----------------------------------------------------------------------

// 7. Parâmetros com valor padrão (forma antiga, antes do ES6)

function funcao2(a, b) {
    b = b || 3; // Se `b` for falsy (undefined, null, 0, "", false), usa 3
    console.log(a + b);
}

funcao2(2); 
// Saída: 5 — `b` é undefined, então vira 3 => 2 + 3 = 5

// ⚠️ Se você passar `0`, `b` também será substituído por 3, o que pode ser indesejado

// ----------------------------------------------------------------------

// 8. Parâmetros com valor padrão (forma moderna, ES6+)

function funcao3(a, b = 2, c = 4) {
    console.log(a + b + c);
}

funcao3(2, undefined, 20); 
// Saída: 2 + 2 (default de b) + 20 = 24
// ⚠️ Para "pular" o segundo argumento e usar o valor padrão, é necessário passar `undefined`

// ----------------------------------------------------------------------

// 9. Atribuição via desestruturação (parâmetro como objeto)

function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

funcao4({ nome: 'Larissa', sobrenome: 'Cristina', idade: 20 });
// Uso de desestruturação diretamente nos parâmetros da função
// Muito útil para lidar com objetos como argumentos

const conta = (...args) => { // imprime ['+', 1, 20, 30, 40, 50]
    console.log(args);
};

conta('+', 1, 20, 30, 40, 50);