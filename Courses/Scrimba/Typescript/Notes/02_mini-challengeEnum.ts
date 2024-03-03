// Enum types:
// Enums permitem definir um conjunto nomeado de constantes. 
// Eles podem ser usados ​​para criar um conjunto claro de valores que mais tarde podem ser referenciados por nome.
enum Permissions {
    ADMIN, // => ADMIN = 'dog'
    READ_ONLY // => ADMIN = number
}

// Constantes definidas para comparação com permissões
const ADMIN = 'admin';
const READ_ONLY = 'read-only';

// Objeto representando uma pessoa com permissões
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN, // Permissão definida usando o enum
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Verifica se as permissões são de administrador
if (you.permissions === ADMIN) {
    // Se as permissões forem de administrador, mostra alguma coisa
    //show
}

// Enum Types mini-challenge
// Replace the value of loyaltyUser to a GOLD_USER, SILVER_USER or BRONZE_USER, making sure to
// use what we learnt about Enums in the previous lesson. Make Sheia GOLD, Andrzej BRONZE 
// and Omar SILVER.
// 2. export the enum
// 3. Fix the function in the utils to show Sheias star as she is a GOLD_USER.


//export to 02_mini-challengeEnumExample.ts
export enum Permissions {
    ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}


export enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER',
}