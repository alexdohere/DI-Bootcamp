let tasks = [];
let taskInputElement = document.getElementById("taskInput");
let taskForm = document.getElementById("taskForm");
let taskList = document.querySelector(".listTasks");
const clearButton = document.getElementById("buttonClear");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addNewTask(taskInputElement.value);
  taskInputElement.value = "";
});

function addNewTask(taskText) {
  const taskId = tasks.length;
  tasks.push({ task_id: taskId, text: taskText, done: false });

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("checkbox");
  checkBox.addEventListener("change", function () {
    tasks[taskId].done = checkBox.checked;
    taskTextElement.style.textDecoration = checkBox.checked
      ? "line-through"
      : "none";
    taskTextElement.style.color = checkBox.checked ? "red" : "black";
  });

  const taskTextElement = document.createElement("label");
  taskTextElement.textContent = taskText;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-btn");
  removeButton.innerHTML = '<i class="fas fa-times"></i>';
  removeButton.addEventListener("click", function () {
    deleteTask(taskId);
  });

  taskDiv.appendChild(checkBox);
  taskDiv.appendChild(taskTextElement);
  taskDiv.appendChild(removeButton);
  taskList.appendChild(taskDiv);
}

function deleteTask(taskId) {
  tasks.splice(taskId, 1);
  updateTaskList();
}

function updateTaskList() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    addNewTask(task.text);
  });
}

clearButton.addEventListener("click", function () {
  tasks.length = 0;
  taskList.innerHTML = "";
});
