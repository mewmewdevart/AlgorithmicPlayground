let a = 'A';
let b = 'B';
let c = 'C';

// Desestruturaçãi
const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);


const numeros = [10, 20, 30, 40, 50];

const [primeiroNumero, segundoNumero, ...rest] = numeros; // diferença entre rest e spread?

console.log(primeiroNumero, segundoNumero, rest)