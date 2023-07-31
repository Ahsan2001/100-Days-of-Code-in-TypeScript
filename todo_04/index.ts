#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk";

const todos: string[] = [];

async function showTodo() {

    console.log(chalk.bold('\n----------- Add  item into Todo LIST -----------'));

    const enterTodo = await inquirer.prompt({
        type: 'input',
        name: 'title',
        message:  chalk.blue.bold('Enter the Todo item:')
    })

    if(enterTodo.title === ""){
        console.log(chalk.red("List cannot be empty"))
        return false
    }
    
    else {
        todos.push(enterTodo.title);
        console.log(chalk.green.bold(`${enterTodo.title} Sucessfully added to list`))
    
        console.log(chalk.bold('\n----------- TODO LIST -----------'));
        todos.forEach(element => {
            console.log(chalk.green.bold(`${element}`));
        });
    }

    if(todos.length == 0 ){
        console.log(chalk.red("List cannot be empty"))
    }

}


async function todoList() {
    let again;
    do {
        await showTodo();
        again = await inquirer.prompt([{
            type: "string",
            name: "ans2",
            message: "Do you want to add more in the list ? press yes or no"
        }])

    } while (again.ans2.toLowerCase() === "yes" || again.ans2.toLowerCase() === "y");
}

todoList()