var tasksList = {
  tasks: ["item 1", "item 2", "item 3"],
  displayTasks: function()  {
    console.log("My Tasks", this.tasks);
  },
// add a function here addTask
  addTask: function(todo)  {
    this.tasks.push(todo);
    this.displayTasks();
  },

changeTask: function(position, newValue)  {
  this.tasks[position] = newValue;
  this.displayTasks();
  },

deleteTask: function(position)  {
  this.tasks.splice(position, 1);
  this.displayTasks();
  }
};
