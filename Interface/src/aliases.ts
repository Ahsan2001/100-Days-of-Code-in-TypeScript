// Type Aliases allow defining types with a custom name (an Alias).


type height = number;
type myName = string;
type myDesignation  = string;

type Car  = {
  year: number,
  type: string,
  model: string
}

const car: Car = {
    year: 2009,
    type: "Toyota",
    model: "Corolla"
};

const fullHeight : height = 5.5;

console.log(car);
console.log(fullHeight)