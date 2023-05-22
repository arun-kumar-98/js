//

//Goal: create method to get incomplete task

//1.define getTaskToDo method
//2.use filter to return just the incomplete task( recomended:- use arrow function)
//3.Test your work by running script

const chalk = require("chalk");

const incompleteTask = {
  tasks: [
    {
      text: "Grocery shoping",
      completed: true,
    },
    {
      text: "clean yard",
      completed: false,
    },

    {
      text: "film course",
      completed: false,
    },
    {
      text: "subject",
      completed: false,
    },
  ],
  getTaskToDo() {
    const taskToDo = this.tasks.filter((task) => {
      return task.completed === false;
    });
    return taskToDo;
  },
};

console.log(incompleteTask.getTaskToDo());

// tasks.forEach((element) => {
//   if (element.completed === false) {
//     console.log(chalk.red(element.text + "  status-------> " + element.completed));
//   }
// });

function getTaskToDo() {
  const todo = incompleteTask.tasks.filter((task) => {
    return task.completed === false;
  });
  return todo;
}

console.log(getTaskToDo());
