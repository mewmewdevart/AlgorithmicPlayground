function isFizz(number) {
    if (typeof number !== 'number') return number;

    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    else if (number % 3 === 0) return 'Fizz';
    else if (number % 5 === 0) return 'Buzz';
    else return number;
}

let i = 0;

while (i <= 100) {
    console.log(isFizz(i));
    i++;
}