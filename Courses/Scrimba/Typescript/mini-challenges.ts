// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const reviews = [
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

// My solutios : Devaneei na resposta
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement | null;

    if (reviewTotalDisplay) {
        function reviewsOfSite(stars: number[]): void {
            reviewTotalDisplay.innerHTML = stars.join(', '); // Exibir todas as estrelas separadas por vírgulas
        }

    function toShow() {
        const allStars = reviews.map(review => review.stars); // Extrair todas as estrelas das revisões
        reviewsOfSite(allStars); // Chamar a função reviewsOfSite com todas as estrelas
    }
}
toShow();

// The solution from the video
function showReviewTotal(value: number){
    reviewTotalDisplay!.innerText = 'review total' + value.toString();
}

showReviewTotal(reviews.length);