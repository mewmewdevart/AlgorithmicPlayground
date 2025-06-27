try {
    // É executada quando nao ha erros
    console.log("Abri um arquivo");
    console.log("Manipulei o arquivo e gerou o erro");
    console.log("Fechei o arquivo");
} catch (e){
    // É executada quando ha erros
    console.log("Tratando o erro");
} finally {
    // É executada sempre
    console.log("Finally: Eu sempre sou executado");
}

console.log("---------");

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date.')
    }

    if(!data){
        data = new Date();
    }

    return(data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }))
}


try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(data); // ou => new Date
    console.log(hora);
}
catch (ee){
    // Tratar erro
} finally {
    console.log('Tenha um bom dia.')
}