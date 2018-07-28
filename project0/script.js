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
  todos.forEach((todo, i) => {
    list.innerHTML += "<li class='todo-container' id=" + i + "><input type='checkbox'" + (todo.checked === true ? 'checked' : '') + "/><span>" + todo.todo + "</span><button class='delete'>X</button></li>";
  });
  uncheckedCountSpan.textContent = numUncheckedTodos();
  addEventListeners();
}

function newTodo() {
  let todo = "Todo " + count;
  todos.push({
    todo: todo,
    checked: false
  });
  count++;
  itemCountSpan.textContent = parseInt(itemCountSpan.textContent) + 1;
  displayTodos();
}

function deleteTodo(e) {
  todos = todos.filter(todo => {
    return !(todo == e.target.parentNode.firstChild.textContent);
  });
  console.log(e.target.parentNode.firstChild.textContent);
  itemCountSpan.textContent = parseInt(itemCountSpan.textContent) - 1;
  displayTodos();
}

function addEventListeners() {
  list.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", deleteTodo);
  });
  list.querySelectorAll("input").forEach(checkBox => {
    checkBox.addEventListener("change", function(e) {
      todos[parseInt(e.target.parentNode.getAttribute("id"))].checked = e.target.checked;
      uncheckedCountSpan.textContent = numUncheckedTodos();
    });
  });
}

function numUncheckedTodos() {
  return Array.from(list.querySelectorAll("input")).filter(checkBox => checkBox.checked === false).length;
}