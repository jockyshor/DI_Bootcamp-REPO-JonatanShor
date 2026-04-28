
let theTaskList = document.getElementById("unorderedList");
let addBar = document.getElementById("theAddBar");
let addButton = document.getElementById("addButton");
let userInput = document.getElementById("addbar");
let allTasksEver = {}

function createTask(e){
    e.preventDefault();
    let submitedTask = userInput.value;
    if (submitedTask === ""){alert("Type Something Before submitting"); return};
    let taskId = "task_" + Date.now();
    allTasksEver[taskId] = {
        name: submitedTask,
        isDone: false
    };

    let liTask = document.createElement("li");
    let doneBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    liTask.textContent = submitedTask;
    doneBtn.className = "btn waves-effect waves-light btn-small right";
    doneBtn.type = "click";
    doneBtn.addEventListener("click", function(){liTask.style.textDecoration = "line-through"; allTasksEver[taskId].isDone = true;});
    doneBtn.innerHTML = "Done";
    liTask.className = "flow-text fontsize-2rem";
    deleteBtn.className = "btn waves-effect waves-light btn-small left";
    deleteBtn.type = "click";
    deleteBtn.addEventListener("click", function(){liTask.remove()})
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    liTask.appendChild(deleteBtn);
    liTask.appendChild(doneBtn);
    theTaskList.appendChild(liTask);
    userInput.value = ""
}




addButton.addEventListener("click", createTask)
