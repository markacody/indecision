//Use classes in React to reuse code. Without React, classes are a reserved word in JS but they do nothing useful.

//Define a constructor function. It's the function that is called when you create a new instance. Without it, you lose access to arguments passed in when the function is called, 'Mark Cody' in the example below. 

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

//subclasses, like student which is person with additional attributes. use extends
 class Student extends Person {
     constructor(name, age, major) {
         super(name,age);
         this.major = major;
     }
     hasMajor() {
         return !!this.major;
     }
     getDescription() {
         let description = super.getDescription();
         if (this.hasMajor()) {
             description += ` This major is ${this.major}`;
         }
         return description;
     }
 }

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHome() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I am from ${this.homeLocation}.`    
        }
        return greeting;
    }
}


const me = new Traveler('Mark Cody', 45, 'Philadelphia');
console.log(me.getGreeting());

const other = new Traveler('Barbra');
console.log(other.getGreeting());
