console.log("hello");
console.log("world");
// This is a line comment. JS engine will ignore this

// code block Comment
// function comment(): string{
//     return "This is string."
// }

// end of block comment

const integer: number = 200;
const float: number = 201.00254; // JS / TS doesn't care whether we have decimal (float) or whole ( int) they are the same.
const first_name: string = "Alice";
const last_name = "Turner";

let location2;
let age = null;

console.log(`${location2} == ${age} ? ${location2 == age}`);
console.log(`${location2} == ${age} ? ${location2 === age}`);

let one = 1;
let two = 2;
let three = 3;
// standard BODMAS order of operations - use brackets to override
// below is: 1 + 2 - ( (3 * 2) / 1 ) = 3 - 6
console.log(one + two - (three * two) / one); // -3

// to increment by one (all the same):
one = one + 1; // new value of one is previous value + 1
one += 1; // shorthand - add 1 to previous (also *=)
one++; // increment previous value (by 1)
// to decrement by one (all the same):
two = two - 1; // new value of two is previous value - 1
two -= 1; // shorthand - minus 1 from previous (also /=)
two--; // decrement previous value (by 1)

// Ternary statements

console.log(!undefined); // true - convert value to boolean then negate it (opposite)
console.log(!!""); // false - convert value to boolean then negate/toggle twice

console.log("apple" < "banana"); // true - because a is less than b (rule 2)
console.log("eat" < "eaten"); // true - because all characters are the same but eaten is longer (rule 5)

sayHiExpression();
sayHiFunction();
sayHiArrow();

const sayHiExpression = function () {
    console.log("hi");
};

function sayHiFunction() {
    console.log("hi");
}

const sayHiArrow = () => console.log("Hi");

sayHiExpression();
sayHiArrow();

const user = {
    // user object contained within curly braces
    name: "joe", // string property with key 'name' and value 'joe'
    age: 20, // numeric property with key 'age' and value 20
    "has a dog": true, // multi-word property key 'has a dog' with boolean value true
};

console.log(user.name); // get object property called name and log it
let dogOwner = user["has a dog"]; // get value of property 'has a dog' and assign to new variable
user.age = 21; // set (or assign) new value to object property called age
user.location = "NSW"; // create new object property called location and set (assign) a value
delete user.location; // delete property of user object called location

function add(a: number, b: number): string {
    return String(a + b);
}

console.log(add(2, 3));

//console.log(add("2", "3")); // Bad Typescript code
