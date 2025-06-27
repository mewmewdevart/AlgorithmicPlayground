function random(min, max){
    const r  = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 11;
let rand = random(min, max);


// Primeiro checa a condição e depois executa o codigo
while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}
console.log('---------')


// Primeiro executa o codigo, e depois checa a condição
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10)