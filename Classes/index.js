var Animal = /** @class */ (function () {
    // Constructor
    function Animal(name) {
        // this.name is the private property we define in top
        // name come from parameter 
        this.name = name;
    }
    // Method
    Animal.prototype.makeSound = function (sound) {
        console.log("".concat(this.name, " makes a ").concat(sound, " sound."));
    };
    return Animal;
}());
// Create instances of the class
var cat = new Animal("Whiskers");
var dog = new Animal("Buddy");
// Use class methods
cat.makeSound("Meow"); // Output: Whiskers makes a Meow sound.
dog.makeSound("Woof"); // Output: Buddy makes a Woof sound.
