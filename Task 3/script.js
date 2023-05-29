// Function to get the current date and time
function getCurrentDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString("en-US");
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
  return `${date} ${time}`;
}

// Function to create a new task item
function createTaskItem(taskText) {
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <span class="task-actions">
      <button class="complete-btn" onclick="completeTask(this)">Complete</button>
      <button class="edit-btn" onclick="editTask(this)">Edit</button>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    </span>
    <span class="task-datetime">${getCurrentDateTime()}</span>
  `;
  return taskItem;
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    const pendingTasksList = document.getElementById("pendingTasks");
    pendingTasksList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Function to complete a task
function completeTask(completeButton) {
  const taskItem = completeButton.parentNode.parentNode;
  const completedTasksList = document.getElementById("completedTasks");
  const taskActions = taskItem.querySelector(".task-actions");
  taskActions.remove();
  taskItem.classList.add("completed");
  completedTasksList.appendChild(taskItem);
}

// Function to edit a task
function editTask(editButton) {
  const taskItem = editButton.parentNode.parentNode;
  const taskText = taskItem.querySelector(".task-text");
  const taskActions = taskItem.querySelector(".task-actions");
  const newTaskText = prompt("Edit the task:", taskText.textContent);

  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskText.textContent = newTaskText.trim();
    taskActions.style.display = "flex";
  }
}

// Function to delete a task
function deleteTask(deleteButton) {
  const taskItem = deleteButton.parentNode.parentNode;
  taskItem.remove();
}
