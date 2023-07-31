#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function handleInput() {
    const userAnswer = await inquirer.prompt([
        {
            name: "ans1",
            type: 'string',
            message: chalk.bold.underline("Enter user id :")
        },
        {
            name: "ans2",
            type: 'string',
            message: chalk.bold.underline("Enter user pin :")
        },
    ]);
    const possibleError = [{
            idError: "User id must be entered !",
            pinError: "User Pin must be entered !",
            digitError: "Please put the valid 4 digit Pin Code"
        },
    ];
    const randomData = [
        {
            email: "userone@gmail.com",
            username: "Ahsan",
            age: "21"
        },
        {
            email: "usertwo@gmail.com",
            username: "Zeeshan",
            age: "22"
        },
        {
            email: "userthree@gmail.com",
            username: "Talha",
            age: "23"
        },
        {
            email: "userfour@gmail.com",
            username: "Bilal",
            age: "24"
        },
        {
            email: "userfive@gmail.com",
            username: "Damil",
            age: "25"
        }
    ];
    const randomDataCall = Math.floor(Math.random() * 4);
    if (userAnswer.ans1 == "") {
        console.log(chalk.red(possibleError[0].idError));
    }
    else if (userAnswer.ans2 == "") {
        console.log(chalk.red(possibleError[0].pinError));
    }
    else if ((userAnswer.ans2).toString().length != 4) {
        console.log(chalk.red(possibleError[0].digitError));
    }
    else {
        console.log(chalk.green.bold(`
           userId : ${userAnswer.ans1} \n
           userPinCode:  ${userAnswer.ans2} \n
           username: ${randomData[randomDataCall].username} \n
           age: ${randomData[randomDataCall].age} \n
           email: ${randomData[randomDataCall].email} \n
        `));
    }
}
async function runAtm() {
    let askQuestion;
    do {
        await handleInput();
        askQuestion = await inquirer.prompt([
            {
                type: "input",
                name: "ans3",
                message: "Want to Login Again? enter yes or no",
            }
        ]);
    } while (askQuestion.ans3.toLowerCase() === "y" || askQuestion.ans3.toLowerCase() === "yes");
}
runAtm();
