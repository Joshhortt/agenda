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
     for (var i = 0 ; i < totalTasks; i++) {
        if (this.tasks[i].completed === true) {
        }
     }
     if (completedTasks === totalTasks) {
// Make everything "for" false
     for (var i = 0; i < totalTasks; i++) {
        this.tasks[i].completed = false;
    }
   } else  {
     for (var i = 0; i < totalTasks; i++) {
        this.tasks[i].completed = true;
     }
   }
   this.displayTasks();
  }
};

/*
var displayTasksButton = document.getElementById("displayTasksButton");
var toggleAllButton = document.getElementById("toggleAllButton");

displayTasksButton.addEventListener("click", function()  {
  taskList.displayTasks();
});

toggleAllButton.addEventListener("click", function()  {
  taskList.toggleAll();
});
*/
// Refactoring code to make it more readable
var handlers = {
  displayTasks: function()  {
    taskList.displayTasks();
  },
  toggleAll: function()  {
    taskList.toggleAll();
  },
  addTask: function()  {
    var addTaskTextInput = document.getElementById("addTaskTextInput");
    taskList.addTask(addTaskTextInput.value);
    addTaskTextInput.value = "";
  },
  changeTask: function()  {
  var changeTaskPositionInput = document.getElementById("changeTaskPositionInput");
  var changeTaskTextInput = document.getElementById("changeTaskTextInput");
  taskList.changeTask(changeTaskPositionInput.valueAsNumber, changeTaskTextInput.value);

    changeTaskPositionInput.value = "";
    changeTaskTextInput.value = "";
  },
  deleteTask: function() {
    var deleteTaskPositionInput = document.getElementById("deleteTaskPositionInput");
    taskList.deleteTask(deleteTaskPositionInput.valueAsNumber);
    deleteTaskPositionInput.value = "";
  },
    toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
  }
};
