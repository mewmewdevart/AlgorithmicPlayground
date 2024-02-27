function findDigits(n) {
	let count  = 0;
	let originalN = n;
	
	while(n > 0){
		let digit = n % 10; // Obtém o último dígito, o resto
		// Verifica se o dígito é diferente de zero e se é divisor de n
		if(digit !== 0 && originalN % digit === 0)
			count++;
		n = Math.floor(n/10);
	}
	return(count);
}

console.log(findDigits(12));