// ------------------ TASKS ------------------

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const text = document.getElementById("taskInput").value;
  const date = document.getElementById("dateInput").value;

  if (!text || !date) return alert("Enter task and date");

  tasks.push({
    text,
    date,
    completed: false
  });

  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, i) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span style="text-decoration:${task.completed ? 'line-through' : 'none'}">
        ${task.text} - ${task.date}
      </span>
      <button onclick="toggleTask(${i})">✔</button>
      <button onclick="deleteTask(${i})">🗑</button>
    `;

    list.appendChild(li);
  });

  updateProgress();
}

// ------------------ PROGRESS ------------------

function updateProgress() {
  const total = tasks.length;
  const done = tasks.filter(t => t.completed).length;

  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  document.getElementById("progressText").innerText = percent + "%";
  document.getElementById("progressFill").style.width = percent + "%";
}

// ------------------ QUOTES ------------------

const quotes = [
  "Push yourself, because no one else will.",
  "Small steps every day = big results.",
  "Focus beats motivation.",
  "Discipline creates success.",
  "Start now, not tomorrow."
];

function loadQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}

// ------------------ POMODORO ------------------

let time = 25 * 60;
let timer = null;

function updateTimer() {
  const m = Math.floor(time / 60);
  const s = time % 60;

  document.getElementById("timer").innerText =
    `${m}:${s < 10 ? "0" : ""}${s}`;
}

function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    time--;
    updateTimer();

    if (time <= 0) {
      clearInterval(timer);
      timer = null;
      alert("Break time!");
      time = 5 * 60;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  time = 25 * 60;
  updateTimer();
}

// ------------------ INIT ------------------

loadQuote();
renderTasks();
updateTimer();
