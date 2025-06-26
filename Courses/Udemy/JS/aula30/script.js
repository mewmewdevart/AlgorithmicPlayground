// function getDiaSemanaEmText(diaSemana){
//     let diaSemanaEmTexto;

//     switch (diaSemana){
//         case 0:
//             diaSemanaTexto = "Domingo"
//             return diaSemanaEmTexto;
//         case 1:
//             diaSemanaEmTexto = "Segunda-Feira"; 
//             return diaSemanaEmTexto;
//         case 2:
//             diaSemanaEmTexto = "Terça-Feira"; 
//             return diaSemanaEmTexto;
//         case 3:
//             diaSemanaEmTexto = "Quarta-Feira"; 
//             return diaSemanaEmTexto;
//         case 4:
//             diaSemanaEmTexto = "Quinta-Feira"; 
//             return diaSemanaEmTexto;
//         case 5:
//             diaSemanaEmTexto = "Sexta-Feira";
//             return diaSemanaEmTexto;
//         case 6:
//             diaSemanaEmTexto = "Sabado";
//             return diaSemanaEmTexto;
//     }
// }

// function getMesEmTexto(mes){
//     let mesEmTexto;

//     switch (mes){
//         case 0:
//             mesTexto = "Janeiro"
//             return mesEmTexto;
//         case 1:
//             mesEmTexto = "Fevereiro"; 
//             return mesEmTexto;
//         case 2:
//             mesEmTexto = "Março"; 
//             return mesEmTexto;
//         case 3:
//             mesEmTexto = "Abril"; 
//             return mesEmTexto;
//         case 4:
//             mesEmTexto = "Maio"; 
//             return mesEmTexto;
//         case 5:
//             mesEmTexto = "Junho";
//             return mesEmTexto;
//         case 6:
//             mesEmTexto = "Julho";
//             return mesEmTexto;
//         case 7:
//             mesEmTexto = "Agosto";
//             return mesEmTexto;
//         case 8:
//             mesEmTexto = "Setembro";
//             return mesEmTexto;
//         case 9:
//             mesEmTexto = "Outubro";
//             return mesEmTexto;
//         case 10:
//             mesEmTexto = "Novembro";
//             return mesEmTexto;
//         case 11:
//             mesEmTexto = "Dezembro";
//             return mesEmTexto;
//     }
// }

// const date = new Date();

// const diaSemana = date.getDay();
// console.log("Dia da semana (0=Domingo, 6=Sábado):", diaSemana);
// const ano = date.getFullYear();
// console.log("Ano:", ano);
// const dia = date.getDate();
// console.log("Dia do mês:", dia);
// const mes = date.getMonth();
// console.log("Mês (0=Janeiro, 11=Dezembro):", mes);
// const hora = date.getHours();
// console.log("Hora:", hora);
// const minutos = date.getMinutes();
// console.log("Minutos:", minutos);

// // console.log(`${getDiaSemanaEmText(diaSemana)}, ${dia} de ${getMesEmTexto(mes)} de ${ano} as ${hora}:${minutos} `)

// const result = `${getDiaSemanaEmText(diaSemana)}, ${dia} de ${getMesEmTexto(mes)} de ${ano} as ${hora}:${minutos} `;

// document.getElementById("content").innerHTML = result;

function getDiaSemanaEmTexto(diaSemana) {
    const diasDaSemana = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
    ];
    return diasDaSemana[diaSemana] || "Dia inválido";
}

function getMesEmTexto(mes) {
    const mesesDoAno = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
    return mesesDoAno[mes] || "Mês inválido";
}

// Captura a data atual
const date = new Date();

// Extrai as partes da data
const diaSemana = date.getDay();
console.log("Dia da semana (0=Domingo, 6=Sábado):", diaSemana);

const ano = date.getFullYear();
console.log("Ano:", ano);

const dia = date.getDate();
console.log("Dia do mês:", dia);

const mes = date.getMonth();
console.log("Mês (0=Janeiro, 11=Dezembro):", mes);

const hora = date.getHours();
console.log("Hora:", hora);

const minutos = date.getMinutes();
console.log("Minutos:", minutos);

const segundos = date.getSeconds();
console.log("Segundos:", segundos);

// Formata a data completa em texto
const result = `${getDiaSemanaEmTexto(diaSemana)}, ${dia} de ${getMesEmTexto(mes)} de ${ano} às ${hora}:${minutos.toString().padStart(2, '0')}`;

// Exibe no HTML (necessário ter um elemento com id="content" na página)
document.getElementById("content").innerHTML = result;


/*
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR, {dateStyle: 'full', timeStyle: 'short'})

*/