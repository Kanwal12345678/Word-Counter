#!/usr/bin/env node
// import the inquirer module, which is a command line for node.js
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.redBright.italic.bold(" \n\t || ~~~~~~~~~~~ Welcome to Word Counter ~~~~~~~~~~~ || \t "));
//declare a constant answers and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: chalk.yellowBright.italic("input"),
        message: chalk.yellowBright.italic("Enter your sentence to count the word: "),
    },
]);
const words = answers.Sentence.trim().split(" ");
//print the array of words to the console
console.log(chalk.blueBright.italic(words));
//print the word count of the sentence to the console
console.log(chalk.magentaBright.italic.bold(`Your sentence word count is ${words.length}`));
