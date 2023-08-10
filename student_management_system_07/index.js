#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// This project is a simple console based Student Management System. 
// In this project you will be learning how to add new students, 
// how to enroll students in the given course. Also, you will be 
// implementing the following operations enroll, view balance, pay 
// tuition fees, show status, etc. The status will show all the 
// details of the student including name, id, course enrolled 
// and balance.This is one of the best projects to implement 
// the Object Oriented Programming concepts.
class Student {
    name;
    id;
    balance;
    course;
    constructor(name, id, balance, course) {
        this.name = name;
        this.id = id;
        this.balance = balance;
        this.course = course;
    }
    viewBalance() {
        this.balance;
    }
    payTutionFees(fees) {
        this.balance = this.balance - fees;
    }
    studentStatus() {
        return chalk.green(`
            Name: ${this.name}
            Roll No: ${this.id}
            Balance: ${this.balance}
            Enrolled Course: ${this.course}
           `);
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
    newStudent.payTutionFees(data.fees);
    console.log(newStudent.studentStatus());
}
async function AskQuestions() {
    let again;
    do {
        await handleInput();
        again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: chalk.bold("Do you want to use this again? Type yes or no: "),
            }
        ]);
    } while (again.restart.toLowerCase() === 'y' || again.restart.toLowerCase() === 'yes');
}
AskQuestions();
