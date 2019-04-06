var taskList = {
  tasks: [],

  addTask: function(taskText) {
    this.tasks.push({
      taskText: taskText,
      completed: false
    });
  },

  changeTask: function(position, taskText) {
    this.tasks[position].taskText = taskText;
  },

  deleteTask: function(position) {
    this.tasks.splice(position, 1);
  },

  toggleCompleted: function(position) {
    var task = this.tasks[position];
    task.completed = !task.completed;
  },

  toggleAll: function() {
    var totalTasks = this.tasks.length;
    var completedTasks = 0;
// Get number of completed tasks.


// **********REFACTOR CODE**********

// Delete this FOR LOOP  1
/*   for (var i = 0; i < totalTasks; i++) {
     if (this.tasks[i].completed === true) {
      completedTasks++;
    }
  }
*/

// Add forEach
    this.tasks.forEach(function(task)  {
      if (task.completed === true)  {
      completedTasks++;
      }
    });

// Delete this FOR LOOP 2
/* Case 1: If everything’s true, make everything false.
   if (completedTasks === totalTasks) {
   for (var i = 0; i < totalTasks; i++) {
   this.tasks[i].completed = false;
       }
*/

// Add forEach
      this.tasks.forEach(function(task)  {
        task.completed = false;
      });

// Delete this FOR LOOP 3
/* Case 2: Otherwise, make everything true.
    } else {
   for (var i = 0; i < totalTasks; i++) {
   this.tasks[i].completed = true;
  }
*/

// Add another forEach
     this.tasks.forEach(function(task)  {
        task.completed = true;
      });
    }

 // Down here new reduced code from above
    this.tasks.forEach(function(task)  {
      // Case 1: If everything’s true, make everything false.
      if (completedTasks === totalTasks)  {
        task.completed = false;
       // Case 2: Otherwise, make everything true.
      } else {
        task.completed = true;
      }
    });
  }
};

var handlers = {
  addTask: function() {
    var addTaskTextInput = document.getElementById('addTaskTextInput');
    taskList.addTask(addTaskTextInput.value);
    addTaskTextInput.value = '';
    view.displayTasks();
  },

  changeTask: function() {
    var changeTaskPositionInput = document.getElementById('changeTaskPositionInput');
    var changeTaskTextInput = document.getElementById('changeTaskTextInput');
    taskList.changeTask(changeTaskPositionInput.valueAsNumber, changeTaskTextInput.value);
    changeTaskPositionInput.value = '';
    changeTaskTextInput.value = '';
    view.displayTasks();
  },

  deleteTask: function(position) {
    taskList.deleteTask(position);
    view.displayTasks();

  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    taskList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTasks();
  },

  toggleAll: function() {
    taskList.toggleAll();
    view.displayTasks();
  }
};

var view = {
  displayTasks: function() {
    var tasksUl = document.querySelector('ul');
    tasksUl.innerHTML = '';

// Delete this FOR LOOP 4
  /*  for (var i = 0; i < taskList.tasks.length; i++) {
      var taskLi = document.createElement('li');
      var task = taskList.tasks[i];
      var taskTextWithCompletion = '';

      if (task.completed === true) {
        taskTextWithCompletion = '(x) ' + task.taskText;
      } else {
        taskTextWithCompletion = '( ) ' + task.taskText;
      }

      taskLi.id = i;
      taskLi.textContent = taskTextWithCompletion;

      taskLi.appendChild(this.createDeleteButton());
      tasksUl.appendChild(taskLi);
    }
  */

// Add forEach and select most of the code above, arrange it as needed.

    // Add position
    taskList.tasks.forEach(function(task, position) {
          var taskLi = document.createElement('li');
      //  var task = taskList.tasks[i];
      var taskTextWithCompletion = '';
      if (task.completed === true) {
        taskTextWithCompletion = '(x) ' + task.taskText;
      } else {
        taskTextWithCompletion = '( ) ' + task.taskText;
      }
// Subsituted i for position
      taskLi.id = position;
      taskLi.textContent = taskTextWithCompletion;
      taskLi.appendChild(this.createDeleteButton());
      tasksUl.appendChild(taskLi);
    }, this);
  },

  createDeleteButton: function()  {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';                             return deleteButton;
  },

  setUpEventListeners: function()  {
    var tasksUl = document.querySelector('ul');
     taskUl.addEventListener('click', function(event) {
     console.log(event.target.parentNode.id);
    var elementClicked = event.target;
    if (elementClicked.className === 'deleteButton')  {
      handlers.deleteTask(parseInt(elementClicked.parentNode.id));
    }
  });
  }
};
   view.setUpEventListeners();
