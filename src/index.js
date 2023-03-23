document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.setAttribute("data-description", taskInput.value);
    deleteBtn.addEventListener("click", function (event) {
      newTask.remove();
    });

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
    taskInput.value = "";
  });
});
