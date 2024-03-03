// Enum Types
// Definindo constantes como strings
const ADMIN = 'admin';
const READ_ONLY = 'read_only';

// Definindo um enum para Permissions
// Enums são úteis para representar um conjunto de constantes relacionadas
// Eles fornecem um tipo de dados que pode ser uma das opções de um conjunto de valores pré-definidos
// Neste caso, Permissions enumera as permissões disponíveis
enum Permissions {
    ADMIN, // 0
    READ_ONLY // 1
}

// Objeto representando uma pessoa com suas informações
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN, // Atribuindo a permissão ADMIN
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Verificando se a pessoa tem permissões de administrador
// Comparando a permissão com a constante ADMIN do enum Permissions
if (you.permissions === Permissions.ADMIN){
    // Se tiver permissões de administrador, mostrar algo
    // Aqui você pode colocar o código que deseja executar para usuários com permissões de administrador
}


// Enum Types mini-challenge
// Replace the value of loyaltyUser to a GOLD_USER, SILVER_USER or BRONZE_USER, making sure to
// use what we learnt about Enums in the previous lesson. Make Sheia GOLD, Andrzej BRONZE 
// and Omar SILVER.
// 2. export the enum
// 3. Fix the function in the utils to show Sheias star as she is a GOLD_USER.
// Enum para representar diferentes tipos de usuários leais
enum LoyaltyUser {
    GOLD_USER,
    SILVER_USER,
    BRONZE_USER
}

// Definição do tipo de objeto para reviews
const reviews: { 
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser; // => Alterado o tipo para LoyaltyUser
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER, // => Atribuído um valor do enum LoyaltyUser
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '27-03-2021'
    },
];
