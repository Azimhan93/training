import Contact from "./ContactApi.js";


const comentEl = document.querySelector('#commentInput');
const btn = document.querySelector('#btn');
const ul = document.querySelector('#list');
const todoItemTemplate = document.querySelector('#todoItemTemplate')

btn.addEventListener('click', onBtnClick);
ul.addEventListener('click', OnUlClick);

function init() {
    Contact.getList()
}

function onBtnClick() {
    const message = getInformation();

    if (message == '') {
        alert('Enter something');
    } else {
      
        addTodoItem(message);

        isEmpty();
        clearContact();
    }
}

function OnUlClick(e) {

    const todoItem = e.target.closest('.todoItem');


    if (todoItem) {
        if (e.target.classList.contains('deleteBtn')) {
           return todoItem.remove();
    }

    todoItem.classList.toggle('done');

    }
}

function addTodoItem(message) {
    const todoItemHTML = todoItemTemplate.innerHTML.replace('{{message}}', message);

    ul.insertAdjacentHTML('beforeend', todoItemHTML)

}

function getInformation() {
    return comentEl.value;
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function clearContact() {
    comentEl.value = '';
}