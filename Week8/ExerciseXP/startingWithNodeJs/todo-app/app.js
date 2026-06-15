import TodoList from "./todo.js";

const myTasks = new TodoList();


const task1 = myTasks.add("Do some Sport");
const task2 = myTasks.add("Practice Coding...");

myTasks.toggleComplete(task1.id);

console.log(myTasks.getAll())
