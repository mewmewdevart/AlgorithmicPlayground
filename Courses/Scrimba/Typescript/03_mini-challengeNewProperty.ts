// Wrapping up our Dashboard
// add another property card. The Property should have:
// 1 x picture of a 'Malaysian Hotel' called 'Malia Hotel'
// It should cost 35/night
// It's location should be 'Room 4, Malia , Malaysia, 45334'
// The contact email should be 'lee34@gmail.com'
// The phone number for the property should be +60349822083
// It should not be available

interface Property {
	image: string;
	title: string;
	price: Price;
	location: {
		firstLine: string;
		city: string;
		code: number | string;
		country: Country
	}
	contact: [ number, string];
	isAvailable: boolean;
}

// Array of Properties
const properties : Property[] = [
	{
		image: 'images/colombia-property.jpg',
		title: 'Colombian Shack',
		price: 45,
		location: {
			firstLine: 'shack 37',
			city: 'Bogota',
			code: 45632,
			country: 'Colombia'
		},
		contact: [+112343823978921, 'marywinkle@gmail.com'],
		isAvailable: true  
	},
	{
		image: 'images/poland-property.jpg',
		title: 'Polish Cottage',
		price: 30,
		location: {
			firstLine: 'no 23',
			city: 'Gdansk',
			code: 343903,
			country: 'Poland'
		},
		contact: [+1298239028490830, 'garydavis@hotmail.com'],
		isAvailable: false 
	},
	{
		image: 'images/london-property.jpg',
		title: 'London Flat',
		price: 25,
		location: {
			firstLine: 'flat 15',
			city: 'London',
			code: 'SW4 5XW',
			country: 'United Kingdom',
		},
		contact: [+34829374892553, 'andyluger@aol.com'],
		isAvailable: true
	},
    {
        image: 'images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
]

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer.appendChild(card)
}