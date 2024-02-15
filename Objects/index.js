class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year
    }

    startEngine(){
        console.log(`This ${this.make} ${this.model}'s engine is running.`);
    }
}
const myCar = new Car("Honda", "Civic", 2022);
myCar.startEngine();

// Object Literals
// Create HOC objects

const person = {
    firstName: "Talha",
    lastName: "Saleem",
    getFullName: function() {
        return `fullName: ${this.firstName} ${this.lastName}`
    }
}
console.log(person.getFullName())