// Essa função retorna number
function add(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
}

// Essa função retorna void
function nothing(firstValue): void {
    console.log(firstValue);
}

function retornoIndefinido(firstValue): undefined {
    return (undefined);
}

// Exemplos de uso das funções
// Chamada da função add, que espera dois números e retorna a soma deles
const sumResult: number = add(5, 3);
console.log("Resultado da soma:", sumResult); // => Resultado da soma: 8

// Chamada da função nothing, que não retorna nada (void) e apenas imprime o valor passado como argumento
nothing("Olá, mundo!"); // => Olá, mundo!


// Function Return Types + Void Types mini-challenge
// Instead of having a long 'review total 3', can you make the line say '3 reviews', or '1 review'
// if there is only one? Use a function to do this and assing a type to the functions return.


export function makeMultiple(value: number): string { // => the return is one string
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}


export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay; // => 3 Reviews | Last reviewed by Sheila
}

showReviewTotal(3, reviews[0].name, reviews[0].loyaltyUser) 