// Tuple Types
// 1. Replace the contact values to take an array that contains a
// phone number and email.
// 2. Check the inferred Type that appears in the Object Type.
// 3. Overwrite the inferred type to be a Tuple.

// Array of Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];  // => the contact is a tuple
    isAvailable: boolean;
}[] = [
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
        contact: [ +1234567, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [ +1234567,'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [ +1234567, 'andyluger@aol.com'],
        isAvailable: true
    }
]

console.log(properties);

// Tuples challenge
// 1. Add an array to the variable of currentLocation I have added. This array
// must have your current location, time, and degrees celcius of your location
// NOTE: make sure to make this a Tuple, to only allow those types in that
// structure.
// 2. Add this visually to a footer on your site

let currentLocation: [string, number, number] = ["Brasil", 13:23, 27];

footer.innerHTML = currentLocation[0] + ", " + currentLocation[1] + ", " + currentLocation[2] + "° "; // => Brasil, 13, 27
footer2.innerHTML = currentLocation.toString() + "° ";  // => Brasil, 13, 27