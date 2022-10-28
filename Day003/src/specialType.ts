// Any Example Start 
// /*
// any is a type that disables type checking and effectively allows all types to be used.
let something: any = "Hello World!"; 
// console.log( typeof(something), something );
something = 23;
// console.log( typeof(something), something );
something = true;
// console.log( typeof(something), something );

let arr: any[] = ["Ahsan", 21, true]; 
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
enum FirstEnum1 {
  Newspaper, // 0
  Newsletter,   // 1
  Magazine,  // 2
  Book // 3
}
enum FirstEnum2 {
  Newspaper2 = 1, // 1
  Newsletter2 = 5,   // 5
  Magazine2,  // 6
  Book2 // 7
}
enum FirstEnum3 {
  Newspaper3 = 1, // 1
  Newsletter3 ,   // 2
  Magazine3,  // 3
  Book3 // 4
}

// String enum
enum FirstEnum4 {
    Newspaper4 = "NEWSPAPER", //NEWSPAPER
    Newsletter4 = "NEWSLETTER", //NEWSLETTER
    Magazine4 = "MAGAZINE", //MAGAZINE
    Book4 = "BOOK" //BOOK
}

// Heterogeneous enum
enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
} 
// console.log(Status.Active)
// console.log(Status.Deactivate)
// console.log(Status.Pending)


// */
// Enum Example Close



// Union Type Example Start

// Union types are used when a value can be more than a single type.
// TypeScript allows us to use more than one data type for a variable 
// or a function parameter. This is called union type.

let  code: (string | number | boolean) = "123";
code = 123;   // OK.
// console.log(typeof(code), code);
code = "ABC"; // OK
// console.log(typeof(code), code);
code = true;  // Error
// console.log(typeof(code), code);

// union example close 




// Never Example Start
// never effectively throws an error whenever it is defined


// let x: never = true     // Error: Type 'true' is not assignable to type 'never'.
let hackerIdentification: never;    
// Never Example Close



// Null Undefined Example Start

let notDefined : undefined = undefined;
let nullVariable : null = null;

// console.log(notDefined, nullVariable);

// Null Undefined Example Close




// Void Example start 
// Similar to languages like Java, void is used where there is no data.
// There is no meaning to assign void to a variable, as only  undefined is assignable to void.
var Examplevoid: void = undefined; // OK
// let voidVariable3: void = 123; // Error: Type '123' is not assignable to type 'void'.
// console.log(Examplevoid);

// Void Example Close 
