const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function addTask() {
    const taskText = input.value;

    if (taskText === '') {
        alert("You gotta write something first!");
        return;
    }

    const li = document.createElement("li");
    li.innerText = taskText;

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.className = "close";

    li.appendChild(span);

    list.appendChild(li);

    input.value = "";

}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);