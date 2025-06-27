function mostraHora (){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// function funcaoDoInterval(){
//     console.log(mostraHora())
// }

// setInterval(funcaoDoInterval, 1000);

// Ocorre varias vezes
const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000)

// Oocorre somente uma vez
setTimeout(function (){
    clearInterval(timer);
}, 10000) // Essa funcao ira parar a de setinverval em 10s