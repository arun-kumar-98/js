//const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");

//const validator = require("validator");
//print colored message

// file writting

// fs.writeFileSync(
//   "notes.txt",
//   "Thsis is  my first node app\n update file with some new existing data \nwelcome to world of  web  "
// );

//appenidng text inside

// fs.appendFileSync(
//   "notes.txt",
//   "\nLorem ipsum dolor sit amet. \nId pariatur quia non possimus sint qui architecto voluptatem sit illum distinctio aut repudiandae repellat est cupiditate suscipit.\n Non molestias quia ea illum voluptas et magnam dolorem? Aut delectus enim sit ipsum illo in fugiat enim non earum aliquam qui odit quia. Sit doloremque voluptatem a modi tempora eum repellat repellendusmEt dolorum illum et necessitatibus accusantium At neque quod ad dolorem animi est illum quia ea mollitia quia.\n Vel veniam ratione ut iste voluptatem qui maiores delectus non tempore minus ut odit fugit. Sit voluptatem accusamus et cumque consectetur vel eligendi iusto ea consequatur Quis et tenetur adipisci. Et dolorem accusamus non numquam nisi aut dolorem rerum ut dolorum eligendi At blanditiis doloremque hic quas quaerat?Est magnam cupiditate ad officia aliquid ut autem earum. \nnEos ratione iste a aliquam quia sed iste accusantium sed architecto voluptas. Et quasi illum qui autem provident sed molestias rerum aut iste placeat in facere nihil!"
// );

//use the chalk module 2.4.1 version
//console.log(validator.isURL("https://tectoro.com"));
console.log(chalk.blue.italic("arun.sharma"));

console.log(chalk.black.dim("success!"));
console.log(chalk.green.strikethrough("success!!!"));
console.log(chalk.green.yellow("success!!!"));
console.log(chalk.green.magenta("success!!!"));
console.log(chalk.green.cyan("success!!!"));
console.log(chalk.green.bgBlack("success!!!"));
console.log(chalk.grey.bgBlue("sucess!!!"));
console.log(chalk.white.bgYellow("bg-yellow"));
console.log(chalk.green.bgMagenta("bg-magenta "));

console.log(chalk.blue.inverse("inversed colored !!!!"));
const evenArr = [];
const oddArr = [];
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    evenArr.push(i);
    console.log(chalk.green.inverse(evenArr.toString()));
  } else {
    oddArr.push(i);
    console.log(chalk.red.inverse(oddArr.toString()));
  }
}

//node file system
// console.log(process.argv);
// //argv is a array
// console.log(process.argv);
// const command = process.argv[2];
// if (command === "add") {
//   console.log(chalk.blue.inverse("success"));
// } else {
//   console.log(chalk.red.inverse("input mismatch !"));
// }

//yargs command line argument
// add remove read list
yargs.version("1.0.0");

//create add command
yargs.command({
  command: "add",
  describe: "add new note via argument",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },

  handler: function (argv) {
    console.log(chalk.magenta("Title ======> " + argv.title));
    //reading builder data
    console.log("argument list from body---------->> ", this.builder);
    console.log(chalk.red("Body ----->", argv.body));
  },
});

//remove
yargs.command({
  command: "remove",
  describe: "remove note",
  builder: {
    title: {
      describe: "element to be deleted!!",
    },
  },

  handler: function (argv) {
    console.log("note removed " + argv);
  },
});

//list
yargs.command({
  command: "list",
  describe: "list of notes",
  handler: function () {
    for (let i = 0; i < 4; i++) {
      console.log(chalk.blue("list of noted by page by pages" + i));
    }
  },
});

//read
yargs.command({
  command: "read ",
  describe: "reading notes",
  handler: function () {
    console.log("print placeholder message ");
  },
});

console.log("command line arguments", process.argv);
console.log("yargs based command line ", yargs.argv);


//===============================================================================================================//

//working with json data














