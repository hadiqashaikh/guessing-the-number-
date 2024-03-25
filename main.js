#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 7) + 1;
const answer = await inquirer.prompt([
    {
        name: "num",
        type: "number",
        message: "Enter your guessing number:"
    },
]);
if (answer.num === randomNumber) {
    console.log("congratulations you have won the match");
}
else {
    console.log("your guessing number wrong");
}
