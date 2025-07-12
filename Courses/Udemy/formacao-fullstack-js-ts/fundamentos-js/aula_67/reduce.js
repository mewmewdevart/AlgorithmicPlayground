// Some todos os numeros (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 10, 80, 20, 30, 4, 3, 2, 27];

// Reduce = Reduzir um array a um unico elemento
const total = numeros.reduce(
    function (acumulador, valor, indice, arrayOriginal) {
        acumulador += valor;
        return acumulador;
    }, 0); // O valor passado aqui interfere no comportamento do acumulador, em caso de zero : // A soma de todos os numeros => 181
console.log(total); // A soma de todos os numeros

// Trás somente os valores pares 
const total2 = numeros.reduce(
    function (acumulador, valor, indice, arrayOriginal) {
        if (valor % 2 === 0) acumulador.push(valor);

        return acumulador;
    }, []); // => trás um arr com os valores dentro
console.log(total2);

console.log('------');


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Larissa', idade: 25 },
    { nome: 'Ana', idade: 20 },
    { nome: 'Eduarda', idade: 52 },
    { nome: 'Monica', idade: 16 },
    { nome: 'Kleber', idade: 80 },
]

const maisVelha = pessoas.reduce(
    function (acumulador, valor) {
        // A cada iteração, o reduce compara a idade da pessoa armazenada no acumulador
        // com a idade da pessoa atual (valor).
        //
        // Se a idade do acumulador for maior, mantemos ele como pessoa mais velha até agora,
        // caso contrário, o valor atual assume a posição de pessoa mais velha.
        //
        // Exemplo:
        // - Começa com Larissa (25) como acumulador.
        // - Compara com Ana (20): Larissa é mais velha, mantém Larissa.
        // - Compara com Eduarda (52): Eduarda é mais velha, acumulador vira Eduarda.
        // - Compara com Monica (16): Eduarda é mais velha, mantém Eduarda.
        // - Compara com Kleber (80): Kleber é mais velho, acumulador vira Kleber.
        //
        // No final, retorna a pessoa com maior idade do array.
        
        if (acumulador.idade > valor.idade)
            return acumulador; // mantém acumulador se ele for mais velho
        return valor;          // substitui acumulador se valor for mais velho
    }
);

console.log(maisVelha);
