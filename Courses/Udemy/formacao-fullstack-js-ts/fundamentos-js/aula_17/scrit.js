const alunos = ["Laranja", "Maycon"];

console.log(alunos.length);
alunos.unshift('Luiza'); //Adiciona no indice zero
alunos.push('Ana'); //Adiciona no ultimo indice
alunos.pop(); // Remove do fim
alunos.shift(); //Remove do começo
delete alunos[1];// undefined no maycon
// alunos.[50]; //undefined