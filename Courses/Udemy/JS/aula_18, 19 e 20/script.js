// function createObject(name, lastnme, weight, height) {
//     return {name, lastname, weight, height}
// }

// function createObject() {
//    const form = document.querySelector('.FormData');

// //    form.onsubmit = function(event) {
// //       event.preventDefault(); // Isso impede o reload da página
      
// //       console.log("Hello");
// //    };
//     function receiveEventForm(event){
//         event.preventDefault();
//         console.log(`Hallou, ${contador}`);
//         contador++;
//     };

//     form.addEventListener('submit', receiveEventForm);
// }

function createObject() {
    const form = document.querySelector('form');
    const result = document.querySelector('.result');
    const peopleObject = [];

    function receiveEventForm(event) {
        event.preventDefault();

        const name = form.querySelector('.name').value
        const lastname = form.querySelector('.lastname').value;
        const weight = form.querySelector('.weight').value;
        const height = form.querySelector('.height').value;
        // console.log(name.value, lastname.value, weight.value, height.value)
        
        const person = {
            name,
            lastname,
            weight,
            height
        }

        peopleObject.push(person);
                let output = '';
        peopleObject.forEach(p => {
            output += `${p.name} ${p.lastname} ${p.weight} ${p.height}\n`;
        });

        result.innerText = output;

        // Opcional: limpar campos
        form.reset();
    }

    if (form) {
        form.addEventListener('submit', receiveEventForm);
    } else {
        console.error('Error: Form element not found. Check your HTML or selector.');
    }

}

createObject()