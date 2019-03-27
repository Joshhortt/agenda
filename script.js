var tasksList = {
  tasks: [],
  displayTasks: function()  {
    console.log("My Tasks", this.tasks);
  },

  addTask: function(taskText)  {
    this.task.push({
    taskText: taskText,
    completed: false
  });
  this.displayTasks();
  },

  changeTask: function(position, taskText)  {
   this.tasks[position].taskText = taskText;
   this.displayTasks();
   },

deleteTask: function(position)  {
  this.tasks.splice(position, 1);
  this.displayTasks();
},
toggleCompleted: function(position)  {
  var task = this.tasks[position];
  task.completed = !task.completed;
  this.displayTasks();
}
};
