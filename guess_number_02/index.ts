#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


async function handleInput() {
    let computerNumber = Math.floor((Math.random() * 10)) + 1;
    const userAnswer = await inquirer.prompt([
        {
            name: "guessNumber",
            type: 'number',
            message: chalk.bold.underline("Enter number from 1 to 10 :")
        }
    ]);

    if (userAnswer.guessNumber === computerNumber) {
        console.log(chalk.green(`Yes you are correct  ${userAnswer.guessNumber} is equal to  ${computerNumber}`));
    } else {
        console.log(chalk.red(`Try Again you are incorrect ${userAnswer.guessNumber} is not equal to ${computerNumber}`));
    }
}

async function AskQuestions() {
    let again;
    do {
        await handleInput();
        again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: chalk.bold("Do you want to try again? Type yes or no: "),
            }
        ]);
    } while (again.restart.toLowerCase() === 'y' || again.restart.toLowerCase() === 'yes');
}

AskQuestions();
