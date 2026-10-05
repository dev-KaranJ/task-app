let input = document.querySelector("#taskInput");
let btn = document.querySelector("#addBtn");
let list = document.querySelector("#list");
let err = document.querySelector("#error");

let tasks = ["Learn JavaScript", "Learn React"];
let data = JSON.stringify(tasks);
localStorage.setItem("tasks", data);
console.log(tasks);
console.log(typeof tasks);


function addTask() {
    if (input.value.trim() === "") { 
    err.textContent = "Please enter a task";
        return;}

    err.textContent = "";
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    li.textContent = input.value;
    tasks.push(input.value)
    deleteBtn.textContent = "Delete";
    list.append(li);
    li.append(deleteBtn);
    input.value = "";

    
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });}

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }});

btn.addEventListener("click", () => {
    addTask();
});

