#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first Digit", type: "number", name: "firstDigit" },
    { message: "Enter Second Digit", type: "number", name: "secondDigit" },
    { message: "select one of the operation to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "multiplication", "division"], },
]);
if (answer.operator === "addition") {
    console.log(answer.firstDigit + answer.secondDigit);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstDigit - answer.secondDigit);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstDigit * answer.secondDigit);
}
else if (answer.operator === "division") {
    console.log(answer.firstDigit / answer.secondDigit);
}
else {
    console.log("please select valid operators");
}
