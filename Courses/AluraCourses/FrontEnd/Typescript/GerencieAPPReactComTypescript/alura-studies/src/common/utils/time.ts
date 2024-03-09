export function tempoParaSegundos(tempo: string){
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

    const horasEmsegundos = Number(horas) * 3600; // => 1 hora = 3600 segundos
    const minutosEmSegundos = Number(minutos) * 60; // => 1 minutos em 60 segundos
    return (horasEmsegundos + minutosEmSegundos  + Number(segundos));
}