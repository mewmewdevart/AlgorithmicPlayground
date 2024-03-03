// Array Types
// Can you add a stayedAt property to the you Object, that contains places you 
// have stayed as strings, then add the correct key with assigned type to the 
// existing Object Type?

const you: {
    firstName : string;
    lastName: string;
    age: number;
    isReturning: boolean;
    //stayedAt: array;
    stayedAt: (string[] | number); // => if is only string, put string[], if not put (string[] | number)
} = {
   firstName: 'Bobby',
   lastName: 'Marley',
   age: 24,
   isReturning: true,
   stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 23]
}

// Array Types mini-challenge
// Can you assign the correct Type to the reviews const? Please bear in mind everything
// we have learnt about String, Boolean, Number, Object and Array Types for this.

// array of objects => reviews: {}[]

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[]= [
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