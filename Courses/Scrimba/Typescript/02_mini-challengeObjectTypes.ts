// Object Types
// In this scrim, based on what we just learnt, can you change firstName to firstName, then
// add an age and lastName to the 'you' Object, making sure to account for it in the Specialised
// Object for defining its structure.

const you: {
    firstName : string;
    lastName: string;
    age: number;
    isReturning: boolean;
} = {
   firstName: 'Bobby',
   lastName: 'Marley',
   age: 24,
   isReturning: true,
}

// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?
// Make an array of property obects that have

const properties: {
    image: string;
    title: string;
    pricePerNight: number;
    address: string;
    town: string;
    postCode: number;
    country: string;
    contactDetails:  string | number;
    availableRent: boolean;

}[] = [
    {
        image: 'path.jps',
        title: 'mermaid house',
        pricePerNight: 50,
        address: 'Rua um, 0',
        town: 'São Paulo',
        postCode: 1000,
        country: 'Brasil',
        contactDetails: 'email@gmail.com.br', //=> aceita numeros
        availableRent: true,
    }
]

//Properties2
const properties2 : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: string;
    isAvailable: boolean;
}[] = [
    {
        image: '',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: 'marywinkle@gmail.com',
        isAvailable: true  
    }
]

// Add the properties to the Dashboard
// This is a continuation of the Challenge, in which you are asked to add
// the 3 properties image and title to the dashboard based on the 
// properties array

const propertyContainer = document.querySelector('.properties');

// Array of Properties
const properties3 : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: string;
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
        contact: 'marywinkle@gmail.com',
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
        contact: 'garydavis@hotmail.com',
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
        contact: 'andyluger@aol.com',
        isAvailable: true
    }
]

// Add the properties
for (let i = 0; i < properties3.length; i++){
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties3[i].title;

    const image = document.createElement('img')
    image.setAttribute('src', properties3[i].image);
    card.appendChild(image);
    
    propertyContainer?.appendChild(card);
}