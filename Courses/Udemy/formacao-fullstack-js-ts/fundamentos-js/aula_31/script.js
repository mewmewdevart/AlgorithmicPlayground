const verdadiera = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de funcao

let nome = 'Luiz'; // criando fora do bloco
const nome2 = 'Luiz';

if (verdadeira){
    let nome = 'Otavio;' // criando dentro do bloco
    console.log(nome, nome2);
}