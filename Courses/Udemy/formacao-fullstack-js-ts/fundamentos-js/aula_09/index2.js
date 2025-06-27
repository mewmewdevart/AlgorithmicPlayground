const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória
const aprovado = true; // Bool - true or false


console.log(typeof nome, nome);


let a = [1, 2]; // Declara uma constante 'a' e atribui a ela um array com os valores 1 e 2.
                   // 'a' agora 'aponta' para este array na memória.

const b = a;       // Declara uma constante 'b' e atribui a ela o valor de 'a'.
                   // IMPORTANTE: Isso NÃO cria um novo array. Em vez disso, 'b'
                   // passa a 'apontar' para o *mesmo* array que 'a' está apontando.
                   // Ambas as variáveis agora se referem ao mesmo array em memória.

console.log(a, b); // Exibe os valores de 'a' e 'b' no console.
                   // Neste ponto, ambos mostrarão: [ 1, 2 ] [ 1, 2 ]
                   // Isso porque as duas variáveis se referem ao mesmo array inicial.

b.push(3)          // Usa o método 'push()' em 'b' para adicionar o número 3 ao array.
                   // Como 'b' e 'a' apontam para o MESMO array, esta modificação
                   // afeta o único array que existe na memória, ao qual ambas as variáveis se referem.

console.log(a, b); // Exibe os valores de 'a' e 'b' novamente no console.
                   // Agora, ambos mostrarão: [ 1, 2, 3 ] [ 1, 2, 3 ]
                   // Isso demonstra que a modificação feita através de 'b'
                   // foi visível também através de 'a', porque eles compartilham o mesmo array.