"use strict";
// Types
// String Example start
// /*
let myFirstName = 'Ahsan';
let myLastName = 'Shaikh';
myFirstName = 'Ahsan Sabir Shaikh';
const myFullName = `${myFirstName} ${myLastName}`;
// document.write(`My First Name is ${myFirstName} <br />  My Last Name is ${myLastName}`);
// document.write(`<br /> My Full Name is ${myFullName}`);
// */
// String Example close
// Number Example start
// /*
let myAge = 21;
myAge = 61;
const myHeight = 5.9;
// let myPhoneNumber: number = 03009260000;
// document.write(`My Age is ${myAge} <br />  My Height is ${myHeight}`);
// */
// Number Example close
// Boolean Example start
// /*
let LoveMe = false;
// document.write(`Is she in love with you? ${LoveMe}`);
// document.write(`<br /> Ahh Ahsan AHh Tough Day 💔 `)
LoveMe = !false;
// document.write(`<br /> Bro Keep Trying ${LoveMe} `)
// */
// Boolean Example close
// Array Example
// /*
// Using square brackets
let jsArrayString = ['Ahsan', 'Sabir']; // String Array
let jsArrayNumber = [21, 23]; // Number Array
let jsArrayBoolean = [true, false]; // Boolean Array
jsArrayString.push("Shaikh");
jsArrayString.pop();
// readonly
// The readonly keyword can prevent arrays from being changed.
// let ReadOnlyArray: readonly string[] = ['Ahsan', 'Sabir'];  // String Array
// ReadOnlyArray.push("Shaikh"); // Error: Cannot use 'push , pop types elements' on an array whose type is 'readonly string[]'
// console.log(ReadOnlyArray);
// Using a generic array type, Array<elementType>.
let genericArrayString = ['Ahsan', 'Sabir', 'Banana'];
genericArrayString.push("Shaikh");
// console.log(genericArrayString)
// Both methods produce the same output.
// Array Declaration and Initialization
let genericArrayNew;
genericArrayNew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log( genericArrayNew );
// Multi Type Array
//  using Square Brackets
let values = [true, 'Apple', 2, 'Orange', 3, 4, 'Banana'];
// console.log(values);
// or  using generic syntax
let valuesTwo = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// console.log(valuesTwo);
// */
// Array Example Close 
// Tuples Example Start
// /*
// TypeScript introduced a new data type called Tuple.
// Tuples are great because they allow each element in the array to be a known type of value.
let ourTuple = [5, false, "shaikh"];
console.log(ourTuple);
// */
// Tuples Example Close 
