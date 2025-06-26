const data = new Date(); // => 2025-06-23T15:33:30.443Z
console.log(data.toString());
console.log("-----------");

const agora = new Date();
console.log("Ano local:", agora.getFullYear());
console.log("Mês local (0-indexado):", agora.getMonth());
console.log("Dia do mês local:", agora.getDate());
console.log("Dia da semana local (0=domingo):", agora.getDay());
console.log("Horas locais:", agora.getHours());
console.log("Minutos locais:", agora.getMinutes());
console.log("Milissegundos desde Epoch:", agora.getTime());

console.log("---");

console.log("Ano UTC:", agora.getUTCFullYear());
console.log("Mês UTC (0-indexado):", agora.getUTCMonth());
console.log("Dia do mês UTC:", agora.getUTCDate());
console.log("Dia da semana UTC (0=domingo):", agora.getUTCDay());
console.log("Horas UTC:", agora.getUTCHours());

console.log("-----------");