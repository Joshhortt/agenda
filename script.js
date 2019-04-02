var taskList = {
  tasks: [],
  addTask: function(taskText) {
    this.tasks.push({
      taskText: taskText,
      completed: false,
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
    for (var i = 0; i < totalTasks; i++) {
      if (this.tasks[i].completed === true) {
        completedTasks++;
      }
    }

    // Case 1: If everything’s true, make everything false.
    if (completedTasks === totalTasks) {
      for (var i = 0; i < totalTasks; i++) {
        this.tasks[i].completed = false;
      }
      // Case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTasks; i++) {
        this.tasks[i].completed = true;
      }
    }
  },
};

var handlers = {
  addTask: function() {
    var addTaskTextInput = document.getElementById('addTaskTextInput');
    taskList.addTask(addTaskTextInput.value);
    addTaskTextInput.value = '';
    view.displayTasks();
  },
  changeTask: function() {
    var changeTaskPositionInput = document.getElementById(
      'changeTaskPositionInput'
    );
    var changeTaskTextInput = document.getElementById('changeTaskTextInput');
    taskList.changeTask(
      changeTaskPositionInput.valueAsNumber,
      changeTaskTextInput.value
    );
    changeTaskPositionInput.value = '';
    changeTaskTextInput.value = '';
    view.displayTasks();
  },

  // No need these lines under of code anymore
  /*deleteTask: function() {
var deleteTaskPositionInput = document('deleteTaskPositionInput');
 taskList.deleteTask(deleteTaskPositionInput.valueAsNumber);
 deleteTaskPositionInput.value = '';
 view.displayTasks();
*/
  deleteTask: function(position) {
    taskList.deleteTask(position);
    view.displayTasks();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById(
      'toggleCompletedPositionInput'
    );
    taskList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTasks();
  },
  toggleAll: function() {
    taskList.toggleAll();
    view.displayTasks();
  },
};

var view = {
  displayTasks: function() {
    var tasksUl = document.querySelector('ul');
    tasksUl.innerHTML = '';
    for (var i = 0; i < taskList.tasks.length; i++) {
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
      // DeleteButton for each task
      taskLi.appendChild(this.createDeleteButton());
      tasksUl.appendChild(taskLi);
    }
  },
/* This method could go inside 'var view = { ..'.
   But the Functions are getting to Long, so add inside 'var view', but in the bottom.
   */

  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },

  setUpEventListeners: function() {

    var tasksUl = document.querySelector('ul');

    tasksUl.addEventListener('click', function(event) {
      console.log(event.target.parentNode.id);

      // Get the element that was clicked
      var elementClicked = event.target;

      // Check if elementClicked is a delete buttton.
      if (elementClicked.className === 'deleteButton') {
        // Run handlers.deleteTask
        handlers.deleteTask(parseInt(elementClicked.parentNode.id));
      }
    });
  },
};
// To Run the setUpEventListener is necessary to add this code, otherwise the previous code won't run by itself.
view.setUpEventListeners();
