let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const quotes = [
  "Push yourself, because no one else will do it for you.",
  "Success is the sum of small efforts repeated daily.",
  "Focus on being productive instead of busy.",
  "Dream big. Start small. Act now.",
  "Discipline beats motivation."
];

function loadQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}

loadQuote();

function updateProgress() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  document.getElementById("progressText").innerText = percent + "%";
  document.getElementById("progressFill").style.width = percent + "%";
}
updateProgress();
renderTasks();
if (percent < 40) {
  document.getElementById("progressFill").style.background = "red";
} else if (percent < 80) {
  document.getElementById("progressFill").style.background = "orange";
} else {
  document.getElementById("progressFill").style.background = "green";
}