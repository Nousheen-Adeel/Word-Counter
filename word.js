#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const userAns = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Write your sentence to count the words?",
    },
]);
console.log(chalk.bgBlueBright("***Wellcome to Our Word Counter***"));
const words = userAns.sentence.trim().split(" ");
console.log(chalk.italic.magentaBright(`Your sentense words are:  ${words}`));
console.log(chalk.italic.magentaBright(`Your sentence word count is: ${words.length}`));
console.log(chalk.bgBlueBright("***Thankyou for using our Word counter***"));
