const numeros = [1, 2, 3, 4, 5, 6];

for (let numero of numeros){
    if (numero === 2){
        continue; // Ao encontrar o continue, ele volta para a iteração do laço. E nao entra no if novamente 
    }

    if (numero === 5){
        break;
    }
    
    console.log(numero);
}