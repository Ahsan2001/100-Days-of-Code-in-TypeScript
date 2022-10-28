"use strict";
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// Type Inference
car.model = "Camry";
car.year = 2010;
// Copy of objects 
const newCar = Object.assign({}, car);
// console.log(typeof(car));
// console.log(car.type, car.model, car.year);
// console.log(typeof(newCar));
// console.log(newCar.model);
// Optional Properties
const Gari = {
    type: "Toyota",
    model: "Corolla",
};
Gari.year = 2009;
console.log(Gari);
