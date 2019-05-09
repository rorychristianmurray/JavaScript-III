/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding:

First and foremost we operate in global scale. Since everything in JS is an object (and they _really_ mean that) that means the window itself is an object. Therefore when on the top level, this refers to the object that is the window. 

* 2. Implicit Binding

When using an object to call a function with dot notation, the `this` word used inside of that function will refer to the object doing the calling via dot notation.

* 3. New Binding

When we use a parent constructor function to create a class or a blank object, we then create children or instances of that template object. When we create a specific instancve of the template object using new, `this` will refer to the new object we created from the template.

* 4. Explicit Binding

When we use JavaScripts .call() or .appy() method, we have to specify the object inside of that method and that object that we explicitly state will be the reference object for `this`

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

// Imagine me opening up dev tools in a new Chrome browser then in the console I type...

console.log(this);

// Principle 2

// code example for Implicit Binding

const newObj = {
    name: 'Rory',
    sayThanks: function(toWho) {
        console.log(`${this.name} says thanks to ${toWho} for reviewing this code`)
    }
};

newObj.sayThanks('Adam');


// Principle 3

// code example for New Binding

function ConstructorPerson(personHere) {
    this.name = personHere.name,
    this.age = personHere.age
    this.sayThanks = function(toWho) {
        console.log(`${this.name} says thanks to ${toWho} for reviewing this code`)
    }
};

const rory = new ConstructorPerson({
    'name': 'Rory',
    'age': 30
})

// Principle 4
// code example for Explicit Binding

rory.sayThanks.apply('Adam')


/***********************************************/