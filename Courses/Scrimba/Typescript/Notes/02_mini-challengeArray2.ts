// Array Types mini-challenge
// Can you assign the correct Type to the reviews const? Please bear in mind everything
// we have learnt about String, Boolean, Number, Object and Array Types for this.


// reviews: {}[] => array de objetos
const reviews: {
	name: string;
	stars: number;
	loyaltyUser: true;
	date: string;
}[] = [ 
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]


console.log(reviews)