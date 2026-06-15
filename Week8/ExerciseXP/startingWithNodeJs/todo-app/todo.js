
class TodoList {
  constructor() {
    this.todos = [];
  }


  add(task) {
    const todo = {
      id: crypto.randomUUID(),
      task,
      completed: false,
      createdAt: new Date()
    };
    this.todos.push(todo);
    return todo;
  }

  remove(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleComplete(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return todo;
  }

  getAll() {
    return this.todos;
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}


export default TodoList;


