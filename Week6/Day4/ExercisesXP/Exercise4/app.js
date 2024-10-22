import { TodoList } from "./todo.js";

const myTodoList = new TodoList();

myTodoList.addTask("Learn JavaScript");
myTodoList.addTask("Build a Todo App");
myTodoList.addTask("Read a book");

myTodoList.completeTask(1);

console.log("Todo List:");
console.log(myTodoList.listTasks());
