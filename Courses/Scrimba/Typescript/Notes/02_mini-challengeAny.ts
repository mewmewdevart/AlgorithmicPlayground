// Any Type
// 1. Add a description property to Omars review, and give it a value. 
// 2. Next try addressing what TypeScript does not like.
// 3. Now, imagine we DON'T know what kind of review object we are going to 
// get next.

// Reviews
const reviews : any[] = [
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
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said',
    },
]


// Or with:
// Reviews
const reviews : (
    {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;   
} |
{
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description: string;
}
)[]= [
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
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said',
    },
]