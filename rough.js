const todolist = ["bapineedu", "guravayya", "cellphone"];

localStorage.setItem("todos", JSON.stringify(todolist));
const retrieved = JSON.parse(localStorage.getItem("todos"));
console.log(typeof retrieved);
console.log(retrieved);
// localStorage.clear();
