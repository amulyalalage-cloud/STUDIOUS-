function addTask() {
  let taskInput = document.getElementById("taskInput");
  let dateInput = document.getElementById("dateInput");

  let task = taskInput.value;
  let date = dateInput.value;

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleDone(this)">
      ${task} - ${date}
    </span>
    <button onclick="deleteTask(this)">❌</button>
  `;

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
  dateInput.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}

function toggleDone(span) {
  span.classList.toggle("done");
}