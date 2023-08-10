#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Student {
    private name: string;
    private id: number;
    private balance: number;
    private course: string;

    constructor(name: string, id: number, balance: number, course: string) {
        this.name = name;
        this.id = id;
        this.balance = balance;
        this.course = course;
    }

    viewBalance() {
        this.balance
    }

    payTutionFees(fees: number) {
        this.balance = this.balance - fees 
    }

    studentStatus() {
        return chalk.green(
           `
            Name: ${this.name}
            Roll No: ${this.id}
            Balance: ${this.balance}
            Enrolled Course: ${this.course}
           `
        )
    }

}


async function handleInput() {

    let studentRollNoGenerated = Math.floor((Math.random() * 90000)) + 10000;

    let data = await inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: chalk.bold("Enter Your Name"),
        },
        {
            type: "input",
            name: "balance",
            message: chalk.bold("Enter Your Balance"),
        },
        {
            type: "list",
            name: "course",
            message: chalk.bold("Select The course you want to enroll"),
            choices: ['Javascript', 'Html', 'Css', 'Typescript', 'Node']
        },
        {
            type: "number",
            name: "fees",
            message: chalk.bold("Enter The course fees"),
        },

    ]);


    const newStudent = new Student(data.name, studentRollNoGenerated, data.balance, data.course);   
    newStudent.payTutionFees(data.fees)
    console.log(newStudent.studentStatus())
    
}



// message: chalk.bold("Select Your action you want to perform"),
// choices: ['showBalance', 'payTutionfees', 'showStatus', 'New Student']


async function AskQuestions() {
    let again;
    do {
        await handleInput();
        again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Restart App ?"
            }
        ]);
    } while (again.restart.toLowerCase() === 'y' || again.restart.toLowerCase() === 'yes');
}

AskQuestions();
