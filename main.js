//program here

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const todoContainer = document.getElementById("todoContainer");

let tasks = []; // Use let, and pluralize the name for an array

// Add Task Function
function addTask() {
  const newTask = taskInput.value; // Get the input value

  if (newTask === '') {
    console.log("Enter a task.");
  } else {
    tasks.push(newTask); // Push the task to the array
    taskInput.value = ''; // Clear the input after adding
    viewList(); // Update the task list
  }
}

// View List Function
function viewList() {
  console.log("Your list:");
  taskList.innerHTML = ''; // Clear the current list in HTML
  tasks.forEach((task, index) => {
    // Create an HTML element for each task
    const taskElement = document.createElement("li");
    taskElement.textContent = `${index + 1}.${task}`;
    
    // Add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteTask(index); // Delete task when clicked
    };
    taskElement.appendChild(deleteButton);
    
    taskList.appendChild(taskElement); // Append to the list in the DOM
  });
}

// Delete Task Function
function deleteTask(taskIndex) {
  if (tasks[taskIndex]) {
    tasks.splice(taskIndex, 1); // Remove task from the array
    viewList(); // Update the task list after deletion
  } else {
    console.log("Invalid task.");
  }
}

// Adding event listener to the Add Task button
addTaskButton.addEventListener("click", addTask);