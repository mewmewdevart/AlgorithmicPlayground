// function recebe (numero1, numero2){
//     if (numero1 > numero2)
//         return (numero1);
//     else if (numero2 > numero1)
//         return (numero2);
//     else
//         return("Os dois numeros são iguais!")
// }

function recebe(x, y) {
  return x > y ? x : (y > x ? y : 'Números iguais');
}

// arrow function 
const recebe2 = (x, y ) => {
    return x > y ? x : (y > x ? y : 'Números iguais');
}

// Arrow function que tambem funciona
const recebe3 = (x, y ) => x > y ? x : (y > x ? y : 'Números iguais');

console.log("recebe: ", recebe(4, 5));
console.log("recebe2: ", recebe2(4, 5));