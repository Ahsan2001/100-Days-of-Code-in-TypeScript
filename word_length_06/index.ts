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
    ])

    if
    (word.paragraph === "") {
        chalk.red("Please insert some text here !");
        return false;
    }
    
    // remove start and end extra space with trim 
    let removeExtraSpace = word.paragraph.trim();

    // split convert you string into array and we pass regex here to give only one space
    const totalWords = removeExtraSpace.split(/\s+/);
    console.log(chalk.green.bold(  `Total Words in paragraph:  ${totalWords.length}`));

    // we pass regex here to remove all the space to get the length
    const totalCharacters = removeExtraSpace.replace(/\s+/g, '');
    console.log(chalk.green.bold(  `Total Characters in paragraph:  ${totalCharacters.length}`));

}

async function Run() {
    let again;
    do {
        await handleInput();
        again = await inquirer.prompt([{
            type: "string",
            name: "q1",
            message: chalk.bold("Want to use again this app ? press yes or no")
        }])

    } while (again.q1.toLowerCase() === "yes" || again.q1.toLowerCase() === "y" );
}

Run()