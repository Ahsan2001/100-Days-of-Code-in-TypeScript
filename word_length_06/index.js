#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
async function handleInput() {
    const word = await inquirer.prompt([
        {
            type: "string",
            name: "paragraph",
            message: chalk.green("Enter the paragraph :"),
        },
    ]);
    if (word.paragraph === "") {
        chalk.red("Please insert some text here !");
        return false;
    }
    let removeSpace = word.paragraph.trim();
    console.log(removeSpace);
}
async function Run() {
    let again;
    do {
        await handleInput();
        again = await inquirer.prompt([{
                type: "string",
                name: "q1",
                message: chalk.bold("Want to use again this app ? press yes or no")
            }]);
    } while (again.q1.toLowerCase() === "yes" || again.q1.toLowerCase() === "y");
}
Run();
