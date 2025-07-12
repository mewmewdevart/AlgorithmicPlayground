const a1 = [10, 20, 30, 40, 50, 60, 70, 80];

// Usando for...of para iterar sobre os elementos do array
for (let valor of a1) {
  console.log(valor); // Imprime cada valor individualmente: 10, 20, 30, ...
  // O "valor" aqui representa o elemento atual da iteração
}

// --------------------------------------

// forEach percorre o array executando uma função callback para cada elemento
// A função pode receber até 3 parâmetros: (valorAtual, índice, arrayCompleto)

let total = 0;

a1.forEach((valor, indice, array) => {
  // valor: o número atual do array
  // indice: posição do valor no array (0 a n)
  // array: o array completo (nesse caso, a1)
  
  total += valor; // Soma cada valor ao total
  console.log(`Somando ${valor} (índice ${indice}) → total parcial: ${total}`);
});

console.log('Total final:', total); // Exibe a soma total dos elementos
