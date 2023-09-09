#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Person {

    protected personType: string;

    constructor(personType: string) {
        this.personType = personType;
    }

    Personality(): string {
        return `You are ${this.personType}`;
    }

}

class Student extends Person {

    private name: string;

    constructor(personType: string, name: string) {
        super(personType);
        this.name = name;
    }

    getFullname() {
        return `My full name is ${this.name}\nAnd I am ${this.personType}`;
    }
}


async function studentPersonality() {

    try {
        const q = await inquirer.prompt([
            {
                name: "input",
                type: 'number',
                message: chalk.bold.underline("Enter 1 for Introvert or 2 for Extrovert:")
            }
        ]);

        if (q.input === 1) {
            const user = new Student("Introvert", "Ahsan");

            console.log(
                user.Personality(),
                user.getFullname() 

            );
        } 
        
        
        else if (q.input === 2) {
            const user = new Student("Extrovert", "Nazia");

            console.log(
                user.Personality(),
                user.getFullname() 
            );
        }
        
        else {
            console.log(chalk.red("Invalid input. Please enter 1 or 2."));
        }
    } 
    
    catch (error) {
        console.error(chalk.red("An error occurred:", error));
    }

}

async function main() {
    let ask;
    do {
        await studentPersonality();
        ask = await inquirer.prompt([
            {
                type: "input",
                name: "input",
                message: chalk.bold("Do you want to use this app again? (yes/no)")
            }
        ]);
    } while (ask.input.toLowerCase() === "yes" || ask.input.toLowerCase() === "y");
}

main();



