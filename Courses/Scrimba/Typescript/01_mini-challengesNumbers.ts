// 1.1 Number Types mini-challenge 10 10.2

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

// My solution: I focused on the problem: This function lists all the stars from the reviews
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement | null;

if (reviewTotalDisplay) {
	function reviewsOfSite(stars: number[]): void {
		reviewTotalDisplay.innerHTML = stars.join(', '); // Display all stars separated by commas
	}

	function toShow() {
		const allStars = reviews.map(review => review.stars); // Extract all stars from the reviews
		reviewsOfSite(allStars); // Call the reviewsOfSite function with all stars
	}
}

toShow();

// The solution from the video
function showReviewTotal(value: number){
	reviewTotalDisplay!.innerText = 'review total' + value.toString();
}

showReviewTotal(reviews.length);
