// Retorne a soma do dobro de todos os pares
// Filter pares
// Dobrar os valores
// Reduzir (somar tudo)
const numeros = [5, 10, 90, 10, 20, 4, 5, 8, 89, 20];

// Sem resumir
const numerosPares = numeros.filter(
    function (valor) {
        return (valor % 2 === 0);
    }
).map(function (valor) {
    return valor * 2;
}).reduce(
    function (acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }
);

// console.log(numerosPares)

// Resumido
const numerosPares2 = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor, 0);

console.log(numerosPares2)