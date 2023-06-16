import TodoApi from "./TodoApi.js";

const REMOVE_BTN_CLASS = 'deleteBtn';
const DONE_CLASS = 'done';
const TODO_ITEM_CLASS = 'todoItem';


const input = document.querySelector('#commentInput');
const todoForm = document.querySelector('#todoForm');
const list = document.querySelector('#todo-list');
const todoTemplateHTML = document.querySelector('#todoItemTemplate').innerHTML;

todoForm.addEventListener('submit', onTodoFormSubmit);
list.addEventListener('click', OnTodoListClick);

init();

async function init() {
    try {
        const apiList = await TodoApi.getList();
        renderTodoList(apiList);
    } catch(e) {
        handleError(e);
    }
}

function onTodoFormSubmit(e) {
    e.preventDefault();
    
    if (isEmpty(input.value)) {
        alert('Enter something');
        return;
    } 
      
        addTodoItem(input.value);

        clearContact();
}

function OnTodoListClick(e) {

    const todoEl = getTodoElement(e.target);
    const classList = e.target.classList;
    
    if (todoEl) {
        if (classList.contains(REMOVE_BTN_CLASS)) {
            removeTodo(todoEl);
        }

        if (classList.contains(TODO_ITEM_CLASS)) {
            toggleDone(todoEl);
        }
    }
}

function getTodoElement(target) {
    return target.closest('.' + TODO_ITEM_CLASS);
}

function renderTodoList(todoList) {
    const todoItemHTML = todoList.map(generateTodoHTML).join('');

    list.insertAdjacentHTML('beforeend', todoItemHTML);
}

function addTodoItem(todo) {
    const todoItemHTML = generateTodoHTML(todo);

    list.insertAdjacentHTML('beforeend', todoItemHTML);

}

function generateTodoHTML(todo) {
    const done = todo.status ? DONE_CLASS : '';

    return todoTemplateHTML
        .replace('{{id}}', todo.id)
        .replace('{{status}}', todo.status)
        .replace('{{title}}', todo.title)
        .replace('{{done}}', done);
}

async function removeTodo(el) {
    try {
        const id = getTodoElId(el);
        const removeTodoListEl = await TodoApi.delete(id);
    } catch(e) {
        handleError(e);
    }

    el.remove();
}

function toggleDone(el) {
    const id = getTodoElId(el);
    const status = el.dataset.status !== 'true';

    TodoApi.update(id, {status});

    el.classList.toggle(DONE_CLASS);
}

function getTodoElId(el) {
   return el.dataset.id;
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function clearContact() {
    input.value = '';
}

function handleError(e) {
    alert(e.message);
}