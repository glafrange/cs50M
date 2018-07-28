const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let todos = [];
let count = 1;

function displayTodos() {
  list.innerHTML = "";
  todos.forEach(todo => {
    list.innerHTML += "<li class='todo-container'><span>" + todo + "</span><button class='delete'>X</button></li>";
  });
  addEventListeners();
}

function newTodo() {
  todos.push("Todo " + count);
  count++;
  displayTodos();
}

function deleteTodo(e) {
  todos = todos.filter(todo => {
    return !(todo == e.target.parentNode.firstChild.textContent);
  });
  console.log(e.target.parentNode.firstChild.textContent);
  displayTodos();
}

function addEventListeners() {
  list.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", deleteTodo);
  });
}