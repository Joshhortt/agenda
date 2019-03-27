var taskList = {
  tasks: [],
  displayTasks: function()  {
    if (this.tasks.length === 0)  {
       console.log("your task list is empty!");
     } else {
      console.log("My Tasks:");
      for (var i = 0 ; i < this.tasks.length; i++) {
        if (this.tasks[i].completed === true) {
         console.log("(x)", this.tasks[i].taskText);
        } else  {
         console.log("( )", this.tasks[i].taskText);
       }
      }
     }
  },

  addTask: function(taskText)  {
    this.tasks.push({
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
  },

  toggleAll: function()  {
    var totalTasks = this.tasks.length;
    var completedTasks = 0;

// Get the number of completed tasks.
     for (var i = 0 ; i < totalTasks; i++) {
        if (this.tasks[i].completed === true) {
        }
     }

// Case 1: if everything ´s true, make everything false.
  if (completedTasks === totalTasks) {

// Make everything "for" false
  for (var i = 0; i < totalTasks; i++) {
        this.tasks[i].completed = false;
    }
// Case 2: Otherwise "else" make everything true.
   } else  {
     for (var i = 0; i < totalTasks; i++) {
        this.tasks[i].completed = true;
     }
   }

   this.displayTasks();
  }
};
