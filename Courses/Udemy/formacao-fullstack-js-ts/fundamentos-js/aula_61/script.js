// Funcao geradora
function* geradora1(){
    yield 'Valor 01';
    yield 'Valor 02';
    yield 'Valor 03';
    yield 'Valor 04';
}

const g1 = geradora1();
console.log(g1); //= > Object [Generator]
console.log(g1.next()) // => {value: 'Valor 01', done: false} :  O done faz a checagem, ja terminou o gerador? nao? entao é false
console.log(g1.next().value); // => Valor 01:
console.log(g1.next().value); // => Valor 02;
console.log(g1.next().value); // => Valor 03;

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value); // => 0
console.log(g2.next().value); // => 1
console.log(g2.next().value); // => 2
console.log(g2.next().value); // => 3

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor); //=> 0 1 2 3 4 5
}

function* gerador5(){
    yield function (){
        console.log('vim do y1');
    }

    // o return interrompe o fluxo do yield
    return function (){
        console.log('vim do return')
    };

        yield function (){
        console.log('vim do y2');
    }
}

const g5 = gerador5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();