// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?

/*
	Make an array of property object that have:
	- image
	- title
	- couch-surf price per night
	- first line of address
	- town/city
	- postcode/zip-code
	- country
	contact details
	- available to rent
*/


const properties: {
    image: string;
    title: string;
    price: number;
    address: {
        country: string;
        firstLine: string;
        city: string;
        code: number;
        number: number;
    };
    contact: string;
    isAvaiable: boolean;
}[] = [
    {
        image: "casa1.jpg",
        title: "Casa aconchegante no centro da cidade",
        price: 1500,
        address: {
            country: "Brasil",
            firstLine: "Rua das Flores",
            city: "São Paulo",
            code: 12345,
            number: 10
        },
        contact: "João Silva - (11) 1234-5678",
        isAvaiable: true
    },
    {
        image: "casa2.jpg",
        title: "Apartamento moderno com vista para o mar",
        price: 2500,
        address: {
            country: "Brasil",
            firstLine: "Avenida Beira Mar",
            city: "Rio de Janeiro",
            code: 54321,
            number: 20
        },
        contact: "Maria Souza - (21) 9876-5432",
        isAvaiable: false
    },
    {
        image: "casa3.jpg",
        title: "Casa espaçosa com jardim privativo",
        price: 1800,
        address: {
            country: "Brasil",
            firstLine: "Rua dos Ipês",
            city: "Belo Horizonte",
            code: 67890,
            number: 30
        },
        contact: "Carlos Oliveira - (31) 5555-5555",
        isAvaiable: true
    }
];
