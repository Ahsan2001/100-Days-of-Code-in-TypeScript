import inquirer from "inquirer";
import chalk from "chalk";
async function handleInput() {
    const currency = await inquirer.prompt([
        {
            type: "list",
            name: "currency_1",
            message: chalk.green("Enter your current currency :"),
            choices: ['PKR', 'USD', 'EUR', 'GBP', 'PLN', 'CAD', 'JPY', 'EGY']
        },
        {
            type: "list",
            name: "currency_2",
            message: chalk.green("Enter currency you want to convert :"),
            choices: ['PKR', 'USD', 'EUR', 'GBP', 'PLN', 'CAD', 'JPY', 'EGY']
        },
        {
            type: "string",
            name: "amount",
            message: chalk.green("Enter the amount you want to convert :"),
        }
    ]);
    if (currency.amount === "") {
        console.log(chalk.red("Please insert amount !"));
        return false;
    }
}
handleInput();
