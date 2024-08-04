#! /usr/bin/env node

import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random() *10 +1 );

const answers = await inquirer.prompt([

   
      { 
         name: "userGuessedNumber",
         type:  "number",
         message:  "please guess a number between 1-10 : ", 
      }

]);


if(answers.userGuessedNumber === randomnumber){
   console.log("Congratulations! you have guessed the right number");
} else
   console.log("opps! you have guessed the wrong number");

