// Array Types
// Can you add a stayedAt property to the you Object, that contains places you 
// have stayed as strings, then add the correct key with assigned type to the 
// existing Object Type?

const you: {
	firstName: string,
	lastName: string,
	age: number,
	isReturning: boolean,
	// stayedAt: array; está errado
	stayedAt: {} //=>  Esta notação indica que stayedAt é um objeto vazio: Aceita todos os tipos de conteudo
	//stayedAt: string[] Esta notação indica que stayedAt é um array contendo strings
	// stayedAt: (string | number) => Também é possivel
} = {
	firstName: 'Larissa',
	lastName: 'Cristina',
	age: 24,
	isReturning: true,
	stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 23]
};

console.log(you.stayedAt) // => [ 'florida-home', 'oman-flat', 'tokyo-bungalow' ]

let conteudo: (string | number)[];
conteudo = ['larissa', 24, 1.75];
console.log(conteudo); // Saída: ['larissa', 24, 1.75]
