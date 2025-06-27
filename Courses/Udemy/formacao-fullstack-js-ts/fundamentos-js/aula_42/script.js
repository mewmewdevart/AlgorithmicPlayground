// function ehPaisagem(altura, largura){
//     if (altura > largura)
//         return false;
//     else if (largura > altura)
//         return true;
//     else
//         return false;
// }

let ehPaisagem = (altura, largura) => altura > largura ? false : (largura > altura ? true : false);

console.log(ehPaisagem(5, 6));