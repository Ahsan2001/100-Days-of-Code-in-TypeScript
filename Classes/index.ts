class Animal {
    // Properties
    private name: string;

    // Constructor
    constructor(name: string) {
        // this.name is the private property we define in top
        // name come from parameter 
        this.name = name;
    }

    // Method
    makeSound(sound: string): void {
        console.log(`${this.name} makes a ${sound} sound.`);
    }
}

// Create instances of the class
const cat = new Animal("Whiskers");
const dog = new Animal("Buddy");

// Use class methods
cat.makeSound("Meow"); // Output: Whiskers makes a Meow sound.
dog.makeSound("Woof"); // Output: Buddy makes a Woof sound.


