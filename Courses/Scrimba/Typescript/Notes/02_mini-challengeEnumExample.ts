
import {Permissions, LoyaltyUser} from './02_mini-challengeEnum'


// Reviews
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser; // => O valor se torna o de LoyaltyUser que será referenciado
    date: string
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021'
    },
]