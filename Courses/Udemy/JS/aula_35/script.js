const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]
const container = document.getElementById("container");

for(let i  = 0; i < elementos.length; i++){
    const newTag = document.createElement(elementos[i].tag);
    const newTextOfTag = document.createTextNode(elementos[i].texto);

    newTag.appendChild(newTextOfTag);

    // const currentDiv = document.getElementById("container")
    // document.body.insertBefore(newTag, currentDiv);

    container.appendChild(newTag);
}




