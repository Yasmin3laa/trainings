const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const addTask = function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter the task name first.");
    return;
  }

  // Task row
  const row = document.createElement("tr");
  row.classList.add("taskRow");

  // Done
  const doneCol = document.createElement("td");
  doneCol.classList.add("taskCol", "colDone");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Name
  const taskCol = document.createElement("td");
  taskCol.className = "taskCol colTask";

  const textSpan = document.createElement("span");
  textSpan.className = "taskText";
  textSpan.textContent = taskText;

  checkbox.onchange = function () {
    if (checkbox.checked) {
      textSpan.classList.add("completed");
    } else {
      textSpan.classList.remove("completed");
    }
  };

  doneCol.appendChild(checkbox);
  taskCol.appendChild(textSpan);

  // Delete
  const deleteCol = document.createElement("td");
  deleteCol.className = "taskCol colDelete";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "X";

  deleteBtn.onclick = function () {
    let toDelete = confirm("R U sure to delete this task");

    if (toDelete) {
      row.remove();
    }
  };

  deleteCol.appendChild(deleteBtn);

  row.appendChild(doneCol);
  row.appendChild(taskCol);
  row.appendChild(deleteCol);

  taskList.appendChild(row);

  taskInput.value = "";
  taskInput.focus();
};

taskInput.onkeypress = function (e) {
  if (e.key === "Enter") {
    addTask();
  }
};
