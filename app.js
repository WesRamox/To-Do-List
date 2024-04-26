let taskDescription = document.getElementById("newTask")
let listBox = document.getElementById("listBox")
let warning = document.querySelector(".warning")

let date = new Date().toLocaleDateString('pt-BR')
let updatedDate = date

let taskList = []
let newTask;

console.log(taskList.length)

function getAll() {
}

function getPending() {

}

function getCompleted() {

}

function clearAll() {

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
    <button id="delete-${newTask.id}" class="btnDelete" onclick="deleteTask(${newTask.id});">
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
    </svg></button>
    `
    taskList.push(newTask)
    listBox.append(newTaskElement)

    taskDescription.value = ""
    warning.style.display = "none"

    saveData();
}

function deleteTask(id) {
    taskList.splice(id, 1)
    document.querySelector(`.item-${id}`).remove()

    if(taskList == 0) {
        warning.style.display = "block"
    }

    saveData();
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

function saveData() {
    localStorage.setItem("taskList", JSON.stringify(taskList))

}

function loadData() {
    let listStorage = localStorage.getItem("taskList")
    
    listStorage = JSON.parse(listStorage)
    
    taskList = listStorage


    listStorage.forEach(e => {
        let itemTask = document.createElement("div")
        itemTask.classList.add(`item-${e.id}`, "task")
        //
        itemTask.innerHTML = `
        <input type="checkbox" name="${e.id}" id="${e.id}" onclick="checkedTask(${e.id})">
        <p id="p-${e.id}">${e.taskName}</p>
        <button id="delete-${e.id}" class="btnDelete" onclick="deleteTask(${e.id});">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
        </svg></button>
        `
        listBox.append(itemTask)
    });
    saveData();
}

loadData();