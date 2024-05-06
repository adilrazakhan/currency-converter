#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.79,
    SAR: 3.75,
    AED: 3.67,
    PKR: 278
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Choose your currency from",
        type: "list",
        choices: ["USD", "EUR", "GBP", "SAR", "AED", "PKR"]
    },
    {
        name: "to",
        message: "Choose your currency to",
        type: "list",
        choices: ["USD", "EUR", "GBP", "SAR", "AED", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
