/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is code that is binded to the whole window/browser. Do not want to do, can avoid the confusion by using 'use strict'.
* 2. Implicit Binding applies the this keyword to the object left of the dot, followed by the function name to the right of the dot.
* 3. New Binding applies the this keyword to the specific section of an object that is created & returned by a constructor function. Helps to apply new values to an 'open' object.
* 4. Using call or apply method makes the this keyword Explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
'use strict';
//console.log(this);

// Principle 2

// code example for Implicit Binding

const exObj = {
    greet: 'Welcome',
    name: 'Toosdai',
    greetMember: function(){
        return `${this.greet}, ${this.name}`
    }
}
console.log(exObj.greetMember());

// Principle 3

// code example for New Binding

function studentGreet(student) {
    this.greeting = 'Welcome ';
    this.student = student;
    this.message = function () {
        return this.greeting + this.student;
    };
}

const toosdai = new studentGreet('Toosdai');
console.log(toosdai.message());
// Principle 4

// code example for Explicit Binding

const flight = {
    destination: 'Hawaii'
}
function flightDeparture(firstFlight, secondFlight) {
    return `Flights to ${this.destination} will depart at ${firstFlight} and ${secondFlight}. Please plan accordingly.`;
};

console.log(flightDeparture.call(flight, '6:00a.m.', '2:00p.m.'));