// Part 1: Variables and Conditionals
let tasks = []; // Variable declaration
let maxTasks = 10;

function checkLimit() {
  if (tasks.length >= maxTasks) {
    alert("Task limit reached!");
    return false;
  }
  return true;
}

// Part 2: Custom Functions
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  if (!checkLimit()) {
    return;
  }

  tasks.push(taskText); // Add task to array
  input.value = "";     // Clear input
  renderTasks();        // Update UI
}

function removeTask(index) {
  tasks.splice(index, 1); // Remove task from array
  renderTasks();          // Update UI
}

// Part 3: Loops
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // Clear current list

  // Loop 1: for loop
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.textContent = tasks[i];

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeTask(i);

    li.appendChild(removeBtn);
    list.appendChild(li);
  }

  // Loop 2: forEach loop (just for demo)
  console.log("Current Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}