
let theTaskList = document.getElementById("unorderedList");
let addBar = document.getElementById("theAddBar");
let addButton = document.getElementById("addButton");
let userInput = document.getElementById("addbar");

function createTask(){
    let submitedTask = userInput.value;
    let liTask = document.createElement("li");
    let doneBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    liTask.textContent = submitedTask;
    doneBtn.className = "btn waves-effect waves-light btn-small right";
    doneBtn.type = "click";
    doneBtn.addEventListener("click", function(){liTask.style.textDecoration = "line-through" });
    doneBtn.innerHTML = "Done";
    liTask.className = "flow-text fontsize-2rem";
    deleteBtn.className = "btn waves-effect waves-light btn-small left";
    deleteBtn.type = "click";
    deleteBtn.addEventListener("click", function(){liTask.remove()})
    deleteBtn.innerHTML = "Delete";
    liTask.appendChild(deleteBtn);
    liTask.appendChild(doneBtn);
    theTaskList.appendChild(liTask)
}




addButton.addEventListener("click", createTask)
