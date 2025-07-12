// Filter, map e reduce

// Filter -> sempre retorna um array com a mesma qnt de elementos ou menos
// Retorn os numeros maiores que 10 utilizando Filter
const numeros = [5, 10, 80, 20, 30, 4, 3, 2, 27];

// minha ideia
const arr = numeros.filter(checkReturn);
console.log(arr);

function checkReturn(numero) {
    return numero > 10;
}

// ideia do professor
// Possivel fazer isso
const numerosFiltrados00 = numeros.filter(valor => numeros > 10); // É uma funcao anonima de callback, similar a que criei acima
// Isso tambem
const numerosFiltrados01 = numeros.filter(
     (valor, indice, array) => { // function callBackFilter(valor, indice, array)
        console.log(valor, indice, array);
        return valor > 10;
    }
);
console.log(numerosFiltrados01);

console.log("----");


// Retorne as pessoas que tem o nome com mais de 5 letras
const pessoas = [
    { nome: 'Larissa', idade: 25},
    { nome: 'Ana', idade: 20},
    { nome: 'Eduarda', idade: 16},
    { nome: 'Monica', idade: 52},
    { nome: 'Kleber', idade: 80},
]

const pessoasNomeGrande = pessoas.filter( 
    function (pessoasObj){
        return pessoasObj.nome.length >= 5;
    }
);
console.log(pessoasNomeGrande);

// Retorne as pessoas com mais de 50 anos
const pessoasMaisIdade = pessoas.filter( pessoasObj => pessoasObj.idade >= 50 // apenas adaptando para arrow function
)
console.log(pessoasMaisIdade);

// Retorne as pessoas cujo nome termina com a
const pessoaNameTerminaComA = pessoas.filter(
    function (pessoasObj){
        return pessoasObj.nome.endsWith('a');
    }
)
console.log(pessoaNameTerminaComA);