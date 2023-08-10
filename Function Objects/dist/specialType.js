"use strict";
// Any Example Start 
// /*
// any is a type that disables type checking and effectively allows all types to be used.
let something = "Hello World!";
// console.log( typeof(something), something );
something = 23;
// console.log( typeof(something), something );
something = true;
// console.log( typeof(something), something );
let arr = ["Ahsan", 21, true];
arr.push("Shaikh");
// console.log(arr);
// console.log(typeof(arr), arr);
// */
// Any Example End
// Enum  Example Start
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric
// There are three types of enums:
// Numeric enum  
// String enum
// Heterogeneous enum
// /*
//  Numeric enum  
var FirstEnum1;
(function (FirstEnum1) {
    FirstEnum1[FirstEnum1["Newspaper"] = 0] = "Newspaper";
    FirstEnum1[FirstEnum1["Newsletter"] = 1] = "Newsletter";
    FirstEnum1[FirstEnum1["Magazine"] = 2] = "Magazine";
    FirstEnum1[FirstEnum1["Book"] = 3] = "Book"; // 3
})(FirstEnum1 || (FirstEnum1 = {}));
var FirstEnum2;
(function (FirstEnum2) {
    FirstEnum2[FirstEnum2["Newspaper2"] = 1] = "Newspaper2";
    FirstEnum2[FirstEnum2["Newsletter2"] = 5] = "Newsletter2";
    FirstEnum2[FirstEnum2["Magazine2"] = 6] = "Magazine2";
    FirstEnum2[FirstEnum2["Book2"] = 7] = "Book2"; // 7
})(FirstEnum2 || (FirstEnum2 = {}));
var FirstEnum3;
(function (FirstEnum3) {
    FirstEnum3[FirstEnum3["Newspaper3"] = 1] = "Newspaper3";
    FirstEnum3[FirstEnum3["Newsletter3"] = 2] = "Newsletter3";
    FirstEnum3[FirstEnum3["Magazine3"] = 3] = "Magazine3";
    FirstEnum3[FirstEnum3["Book3"] = 4] = "Book3"; // 4
})(FirstEnum3 || (FirstEnum3 = {}));
// String enum
var FirstEnum4;
(function (FirstEnum4) {
    FirstEnum4["Newspaper4"] = "NEWSPAPER";
    FirstEnum4["Newsletter4"] = "NEWSLETTER";
    FirstEnum4["Magazine4"] = "MAGAZINE";
    FirstEnum4["Book4"] = "BOOK"; //BOOK
})(FirstEnum4 || (FirstEnum4 = {}));
// Heterogeneous enum
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
// console.log(Status.Active)
// console.log(Status.Deactivate)
// console.log(Status.Pending)
// */
// Enum Example Close
// Union Type Example Start
// Union types are used when a value can be more than a single type.
// TypeScript allows us to use more than one data type for a variable 
// or a function parameter. This is called union type.
let code = "123";
code = 123; // OK.
// console.log(typeof(code), code);
code = "ABC"; // OK
// console.log(typeof(code), code);
code = true; // Error
// console.log(typeof(code), code);
// union example close 
// Never Example Start
// never effectively throws an error whenever it is defined
// let x: never = true     // Error: Type 'true' is not assignable to type 'never'.
let hackerIdentification;
// Never Example Close
// Null Undefined Example Start
let notDefined = undefined;
let nullVariable = null;
// console.log(notDefined, nullVariable);
// Null Undefined Example Close
// Void Example start 
// Similar to languages like Java, void is used where there is no data.
// There is no meaning to assign void to a variable, as only  undefined is assignable to void.
var Examplevoid = undefined; // OK
// let voidVariable3: void = 123; // Error: Type '123' is not assignable to type 'void'.
// console.log(Examplevoid);
// Void Example Close 
