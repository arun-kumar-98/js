const { version } = require("yargs");

const event = {
  name: "Birthday party",
  guestList: ["arun", "aryan", "akash", "akshat"],
  printGuestList() {
    console.log("Guest List for " + this.name);
    const that = this;
    this.guestList.forEach(function (guest) {
      //so we can not access this.name here directly
      //because this name attribute not binding with printGuestList()
      //output: this.name return "undefine"
      // console.log(guest + " is attending " + this.name);
      //solution
      //define one more variable and assign current object to this

      console.log(guest + " is attending " + that.name);
    });
    //use arrow function
    console.log("===================================");
  },

  printEachGuest() {
    console.log(this.name);
    this.guestList.forEach((each) => {
      console.log(each + " is attending " + this.name);
    });
  },
};

//print
event.printGuestList();
event.printEachGuest();
console.log(event.name);
