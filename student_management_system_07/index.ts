#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


async function handleInput() {
    let studentRollNoGenerated = Math.floor((Math.random() * 90000)) + 10000;
    console.log(studentRollNoGenerated)
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
