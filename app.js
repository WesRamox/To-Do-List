let taskDescription = document.getElementById("newTask")
let listBox = document.getElementById("listBox")
let warning = document.querySelector(".warning")

let date = new Date()
let updatedDate = date.getUTCDate

let taskList = []
let newTask;

if(taskList == 0) {
    warning.style.display = "block"
}

function getAll() {
}

function getPending() {

}

function getCompleted() {

}

function addNewTask() {
    newTask = {
        taskName: taskDescription.value,
        date: updatedDate,
        id: taskList.length,
        checked: false
    }
    
    let newTaskElement = document.createElement("div")
    newTaskElement.classList.add(`item-${newTask.id}`, "task")
    
    newTaskElement.innerHTML = `
    <input type="checkbox" name="${newTask.id}" id="${newTask.id}" onclick="checkedTask(${newTask.id})">
    <p id="p-${newTask.id}">${newTask.taskName}</p>
    <button id="delete-${newTask.id}" onclick="deleteTask(${newTask.id});">Delete</button>
    `
    listBox.append(newTaskElement)
    taskList.push(newTask)
    
    warning.style.display = "none"
}

function deleteTask(id) {
    taskList.splice(id, 1)
    document.querySelector(`.item-${id}`).remove()

    if(taskList == 0) {
        warning.style.display = "block"
    }
}

function checkedTask(id) {
    if(taskList[id].checked === true) {
        taskList[id].checked = false
        document.querySelector(`#p-${id}`).classList.remove("checked")
    } else {
        taskList[id].checked = true
        document.querySelector(`#p-${id}`).classList.add("checked")
    }
}

taskDescription.addEventListener("keypress", (e) => {
    if(e.key === "Enter" && taskDescription.value != "") {
        addNewTask();
    }
})

