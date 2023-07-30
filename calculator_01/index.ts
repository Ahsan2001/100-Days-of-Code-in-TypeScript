#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"


const sleep = () => {
    return new Promise((res => {
        setTimeout(res, 2000)
    }))
}


async function welcome() {
    console.log(chalk.bold.underline("Developed by Ahsan Shaikh"))
    const title = chalkAnimation.rainbow(`Let started calculation`);
    await sleep()
    title.stop();
    console.log(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`)
}

await welcome()

async function handleInput() {

    const ans = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "which operation you want to perform? \n",
            choices: ["+ Addition", "- Subtraction", "x Multiplication", "/ Division", "^ Power"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter first value : "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second value : "
        }

    ])

    if
        (ans.operator === "+ Addition") {
        console.log(chalk.green(`${ans.num1} + ${ans.num2} =  ${ans.num1 + ans.num2}`));
    }
    else if
        (ans.operator === "- Subtraction") {
        console.log(chalk.green(`${ans.num1} - ${ans.num2} =  ${ans.num1 - ans.num2}`));
    }
    else if
        (ans.operator === "x Multiplication") {
        console.log(chalk.green(`${ans.num1} x ${ans.num2} =  ${ans.num1 * ans.num2}`));
    }
    else if
        (ans.operator === "/ Division") {
        console.log(chalk.green(`${ans.num1} / ${ans.num2} =  ${ans.num1 / ans.num2}`));
    }
    else if
        (ans.operator === "^ Power") {
        console.log(chalk.green(`${ans.num1} ^ ${ans.num2} =  ${ans.num1 ** ans.num2}`));
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
                message: "Do you want to perform the calculation again? Press yes or no: ",
            }
        ]);
    } while (again.restart.toLowerCase() === 'y' || again.restart.toLowerCase() === 'yes');
}

AskQuestions()