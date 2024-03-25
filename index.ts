#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*10+1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess a Number Between 1-10:",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations! you guess the right number");
}

else {
    console.log("Sorry! you guess the wrong number");
  }