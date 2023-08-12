class Name {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        console.log(`My name is ${this.name}`);
    }

}

class Fullname extends Name {
    private lastname: string;

    constructor(name: string, lastname: string) {
        super(name); // Call the constructor of the parent class
        this.lastname = lastname;
    }

    getFullname() {
        console.log(`My full name is ${this.name} ${this.lastname}`);
    }
}


// Create instances
const person = new Fullname("John", "Doe");


// Use methods
person.getName(); // Output: My name is John
person.getFullname(); // Output: My full name is John Doe
