//arguments object - no longer bound with arrow functions

//ES5 syntax retains the arguments object.
//const add = function (a,b) {
//    console.log(arguments);
//    return a+b;
//};
//console.log(3,4,5);

//THIS EXAMPLE 1
//this keyword - no longer bound with arrow functions
//This means the 'that' workaround is no longer necessary
//Here's an example of 'that' workaround
//const user = {
//    name: 'Mark',
//    cities: ['Chicago', 'Eldoradoo', 'Maintown'],
//    printPlacesLived: function () {
//        const that = this;
//        console.log(this.name);
//        console.log(this.cities);
//        this.cities.forEach(function(city){
//            console.log(that.name + ' has lived in ' + city)
//        });
//    }
//};
//user.printPlacesLived();

//THIS EXAMPLE 2
//Line 33 uses the ES5 function keyword to bind a this value. Line 37 uses an arrow function to borrow the parent's this value.
//const newUser = {
//    name: 'Mark',
//    cities: ['Chicago', 'Eldoradoo', 'Maintown'],
//    printPlacesLived: function () {
//        console.log(this.name);
//        console.log(this.cities);
//        this.cities.forEach((city) => {
//            console.log(this.name + ' has lived in ' + city)
//        });
//    }
//};
//newUser.printPlacesLived();

//THIS EXAMPLE 3
//Line 49 uses ES6 method syntax to bind the this value. Line 51 still uses an arrow function to borrow the parent's this value.
//const newUser = {
//    name: 'Mark',
//    cities: ['Chicago', 'Eldoradoo', 'Maintown'],
//    printPlacesLived() {
//        console.log(this.name);
//        console.log(this.cities);
//        this.cities.forEach((city) => {
//            console.log(this.name + ' has lived in ' + city)
//        });
//    }
//};
//newUser.printPlacesLived();

//EXAMPLE 4 uses map instead of forEach to create a new tranformed array
//const newUser = {
//    name: 'Mark',
//    cities: ['Chicago', 'Eldoradoo', 'Maintown'],
//    printPlacesLived() {
//        return this.cities.map((city) => this.name + ' has lived in ' + city); 
//    }
//};
//console.log(newUser.printPlacesLived());

//CHALLENGE
const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((a) => a*this.multiplyBy)
    }
};

console.log(multiplier.multiply());