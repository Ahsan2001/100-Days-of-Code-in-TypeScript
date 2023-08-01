#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from 'chalk';

async function handleInput() {

    const currency = await inquirer.prompt([
        {
            type: "string",
            name: "amount",
            message: chalk.green("Enter the amount in number you want to convert :"),
        },
        {
            type: "list",
            name: "currency_1",
            message: chalk.green("Enter currency you want to check the monetary value of"),
            choices: ['USD', 'EUR', 'CAD', 'JPY', 'EGY']
        },
    ])

    if
        (currency.amount === "") {
        console.log("-----------------------------------------------------------")
        console.log("-----------------------------------------------------------")
        chalk.red("Please insert amount !");
        return false;
    }


    switch (currency.currency_1) {
        case "USD": {
            console.log("---------------- Successfully coverted --------------------")
            console.log("-----------------------------------------------------------")
            console.log(chalk.green.bold(`Your ${currency.amount} PKR is equal to: ${(currency.amount / 287.05).toFixed(2)} usd`))
            break;
        }
        case "EUR": {
            console.log("---------------- Successfully coverted --------------------")
            console.log("-----------------------------------------------------------")
            console.log(chalk.green.bold(`Your ${currency.amount} PKR is equal to: ${(currency.amount / 315.31).toFixed(2)} euro`))
            break;
        }
        case "CAD": {
            console.log("---------------- Successfully coverted --------------------")
            console.log("-----------------------------------------------------------")
            console.log(chalk.green.bold(`Your ${currency.amount} PKR is equal to: ${(currency.amount / 216.03).toFixed(2)} cad`))
            break;
        }
        case "JPY": {
            console.log("---------------- Successfully coverted --------------------")
            console.log("-----------------------------------------------------------")
            console.log(chalk.green.bold(`Your ${currency.amount} PKR is equal to: ${(currency.amount / 2.00).toFixed(2)} jpy`))
            break;
        }
        case "EGY": {
            console.log("---------------- Successfully coverted --------------------")
            console.log("-----------------------------------------------------------")
            console.log(chalk.green.bold(`Your ${currency.amount} PKR is equal to: ${(currency.amount / 9.29).toFixed(2)} egy`))
            break;
        }
        default: {
            console.log("-------------------- Success fAILED -----------------------")
            console.log("-----------------------------------------------------------")
            console.log(chalk.red("Please insert amount !"));
            break;
        }
    }

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