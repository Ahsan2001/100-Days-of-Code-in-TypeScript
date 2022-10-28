"use strict";
function MyName(myName) {
    return myName;
}
// console.log(MyName('Shaikh Shab'))
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(10,5)) 
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
// console.log(add(2,5,5))
// Fat Arrow Function 
let sum = (x, y) => {
    return x + y;
};
// sum(10, 20);
function anyFunction(a, b) {
    return a + b;
}
// console.log(anyFunction("Hello ", 4))
function Greet(...names) {
    return (
    // rest parameter 
    names);
}
// console.log(Greet("Hello", "Steve", "Bill"))
