
// Refactor
var taskList = {
  tasks: [],

/*  Get rid of all this code here

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
 */

  addTask: function(taskText)  {
    this.tasks.push({
    taskText: taskText,
    completed: false
  });
 // this.displayTasks();
  },

  changeTask: function(position, taskText)  {
  this.tasks[position].taskText = taskText;
 // this.displayTasks();
  },

 deleteTask: function(position)  {
  this.tasks.splice(position, 1);
 // this.displayTasks();
  },

  toggleCompleted: function(position)  {
    var task = this.tasks[position];
    task.completed = !task.completed;
   // this.displayTasks();
  },

  toggleAll: function()  {
    var totalTasks = this.tasks.length;
    var completedTasks = 0;
     for (var i = 0 ; i < totalTasks; i++) {
        if (this.tasks[i].completed === true) {
        }
     }
  if (completedTasks === totalTasks) {
  //Make everything false
  for (var i = 0; i < totalTasks; i++) {
        this.tasks[i].completed = false;
    }
   } else  {
     for (var i = 0; i < totalTasks; i++) {
        this.tasks[i].completed = true;
     }
   }

/* Delete this.displayTasks also, because it was only for testing in the console.

   this.displayTasks();
*/
  }
};

var handlers = {

/* Got rid of displayTasks button, and displayTasks handler aswell.

    displayTasks: function()  {
    taskList.displayTasks();
  },
*/

  toggleAll: function()  {
    taskList.toggleAll();
    view.displayTasks();
  },
  addTask: function()  {
    var addTaskTextInput = document.getElementById("addTaskTextInput");
    taskList.addTask(addTaskTextInput.value);
    addTaskTextInput.value = "";
    view.displayTasks();
  },
  changeTask: function()  {
    var changeTaskPositionInput = document.getElementById("changeTaskPositionInput");
    var changeTaskTextInput = document.getElementById("changeTaskTextInput");
    taskList.changeTask(changeTaskPositionInput.valueAsNumber, changeTaskTextInput.value);
    changeTaskPositionInput.value = "";
    changeTaskTextInput.value = "";
    view.displayTasks();
  },
  deleteTask: function() {
    var deleteTaskPositionInput = document.getElementById("deleteTaskPositionInput");
    taskList.deleteTask(deleteTaskPositionInput.valueAsNumber);
    deleteTaskPositionInput.value = "";
    view.displayTasks();
  },
    toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    taskList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTask();
  }
};
// Refactor code!

// Create a object
var view = {
  displayTasks: function()   {
     var tasksUl = document.querySelector("ul");
     tasksUl.innerHTML = "";
     for (var i = 0; i < taskList.todos.length; i++)  {
       var taskLi = document.createElement("li");
// Here goes the variable
       var task = taskList.tasks[i];
// var taskTextWithCompletion = '';
// if (taskCompleted === true) -- Created a variable above to reference if
// task.completed is true
// (x) taskText
// else
// () taskText
// taskLi.textContent = taskTextWithCompletion;
var taskTextWithCompletion = '';
if (task.completed === true)  {
  taskTextWithCompletion = '(x)' + task.todoText;
} else  {
  taskTextWithCompletion = '( )' + task.taskText;
}
       taskLi.textContent = taskTextWithCompletion;
       tasksUl.appendChild(taskLi);
     }
  }
};
