const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

for (let p of ps){
    console.log(p);
}

// Bring the styles
const estilosBody = getComputedStyle(document.body); // pega todos os estilos
const backgroundColorBody = estilosBody.backgroundColor; // pega somente um estilo

console.log(backgroundColorBody);

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'black';
}