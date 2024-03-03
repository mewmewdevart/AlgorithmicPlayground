// Object Types
// In this scrim, based on what we just learnt, can you change userName to firstName, then
// add an age and lastName to the 'you' Object, making sure to account for it in the Specialised
// Object for defining its structure.


const you: {
	firstName: string,
	lastName: string,
	age: number,
	isReturning: boolean
} = {
	firstName: 'Larissa',
	lastName: 'Cristina',
	age: 24,
	isReturning: true,
};

console.log(you.firstName)