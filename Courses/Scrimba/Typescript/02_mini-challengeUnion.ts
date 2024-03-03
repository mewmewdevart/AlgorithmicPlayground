// Union: um conceito em linguagens de programação que permite a um tipo de dado conter valores de tipos diferentes
// Em TypeScript, especificamente, a união é representada pelo operador |

//Esta função aceita parâmetros que podem ser números ou strings.
function add(firstValue: (number | string), secondValue: (number | string)) {
    let result;

    if (typeof firstValue === 'number' && typeof secondValue === 'number')
        result = firstValue + secondValue;
    else if (typeof firstValue === 'string' && typeof secondValue === 'string')
        result = firstValue + ' ' + secondValue;
    else
        console.log('não é possível realizar esta adição');
    return result;
}

const combinedReviews = add(5, 1);
const firstNameLastName = add('Ania', 'Kubow');

console.log(combinedReviews);
console.log(firstNameLastName);


// Union Types Challenge
// 1. Fix the function to show the price per night for each property card only
// if isLoggedIn is true, or the you object has Permissions. (all permissions should work)
// 2. See what happens when a null object to be passed to the you objects permissions.

let authorityStatus : any
isLoggedIn = false // =>is no show



 // Add the properties 1
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(you.permissions, card, properties[i].price) // => call for the showDetails function, add the user permissions
}

// 1.1
function showDetails(authorityStatus: (boolean | Permissions), element : HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
 }