function MyName(myName: string): string {
    return myName;
  }
// console.log(MyName('Shaikh Shab'))


function multiply(value1: number, value2: number):number  {
    return value1 * value2;
}
// console.log(multiply(10,5)) 


// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) :number {
  return a + b + (c || 0);
}
// console.log(add(2,5,5))


// Fat Arrow Function 
let sum = (x: number, y: number): number => {
    return x + y;
}
// sum(10, 20);


function anyFunction(a: any, b:any): any {
    return a + b;
}
// console.log(anyFunction("Hello ", 4))


function Greet( ...names: string[]) {
    return (
        // rest parameter 
        names
    )
}
// console.log(Greet("Hello", "Steve", "Bill"))