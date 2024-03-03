// Classes
// As with other JavaScript language features, TypeScript adds type
// annotations and other syntax to allow you to express relationships 
// between classes and other types.
// 1. Add a Class that will let us create a main image, it should allow us to 
// store the reviews, the src and title.

// Classes in JS
class Car {
	constructor(make, year, color){
		this.make = make;
		this.year = year;
		this.color = color;
	}
}

// Classes in TS
class Car2 {
	make: string;
	year: number;
	color: string;

	constructor(make: string, year: number, color: string) {
		this.make = make;
		this.year = year;
		this.color = color;
	}
}

class MainProperty{
    reviews: number;
    src: string;
    title: string;

        constructor(reviews: number, src: string, title: string){
            this.title = title;
            this.reviews = reviews;
            this.src = src;
    }
}
