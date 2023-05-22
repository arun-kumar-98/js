const { default: chalk } = require("chalk");
const fs = require("fs");
// const bookDetails = {
//   name: "Ego is enemy",
//   author: "Ryan Holiday",
// };

// const bookJson = JSON.stringify(book);
// console.log(chalk.bgCyan(bookJson));

// console.log(chalk.bgBlue("json object to object", JSON.parse(bookJson)));
// console.log(chalk.bgRed("json object to object", JSON.parse(bookJson)));

//writing this json data in file
//fs.writeFileSync("1-json.json", bookJson);

//reading json data

// const dataBuffer = fs.readFileSync("1-json.json");

// const dataObject = dataBuffer.toString();
// console.log(dataObject);

// //parsing to an object

// const obj = JSON.parse(dataObject);
// console.log(obj.author);

//=================Challenges===========================//
//1. read file

const dataBuffer = fs.readFileSync("1-json.json");
const data = dataBuffer.toString();
const user = JSON.parse(data);
console.log(chalk.bgCyan(user));
//modify name and age of author

user.name = "keshav";
user.age = 25;
//convert into json String
const jsonUser = JSON.stringify(user);
console.log(chalk.bgBlue(jsonUser));
fs.writeFileSync("1-json.json", jsonUser);

//==================================//