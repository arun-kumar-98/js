const { default: chalk } = require("chalk");

console.log("starting");

setTimeout(() => {
  console.log("timer after 2 ms");
});
setTimeout(() => {
  console.log(`timer 0 ms`);
}, 0);

console.log("stoping");

//========================//
console.log(
  chalk.green(
    "===================== async javascript tutorials ==============================="
  )
);
console.log("starting up");

setTimeout(() => {
  console.log("two seconds interval");
}, 2000);

setTimeout(() => {
  console.log("0 seconds intevals");
}, 0);

console.log("ending process");


