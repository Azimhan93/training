import PostApi from "./PostApi.js";

const DONE_CLASS = 'done';
const EDIT_BTN = 'editBtn';
const DELETE_BTN = 'deleteBtn';
const POST_ITEM = 'postItem';

const inputEl = document.querySelector('#postInput');
const inputId = document.querySelector('#inputId');
const form = document.querySelector('#form');
const list = document.querySelector('#list');
const postItemTemplate = document.querySelector('#postItemTemplate');


form.addEventListener('submit', onFormPostSubmit);
list.addEventListener('click', OnUlPostClick);

init();

function init() {
    PostApi.getList()
        .then(renderPostList)
        .catch(handleError)
}

function onFormPostSubmit(e) {
    e.preventDefault();

    const post = getInformation();

    if (isEmpty(post.name)) {
        alert('Your value is empty. Please, enter something!');
        return;
    } 

    if(post.id) {
        updatePostItem(post);
    } else {
        createPostItem(post);
    }

    clearContact(); 
}

function OnUlPostClick(e) {

    const postItem = e.target.closest('.postItem');

    if (postItem) {
        if (e.target.classList.contains(EDIT_BTN)) {
            return editList(postItem);
        }
        if (e.target.classList.contains(DELETE_BTN)) {
            return removeList(postItem);
        }
        toggleDone(postItem);
    }
}

function createPostItem(post) {
    PostApi.create(post)
    .then((post) => {
        console.log(post);
        addPostItem(post);
    })
    .catch(handleError);
}

function updatePostItem(post) {
    PostApi.update(post.id, post)
        .then((post) => {
            /* const oldEl = getPostElementId(post.id); */

            init();
        })
        .catch(handleError);
}

function renderPostList(postList) {
    const html = postList.map(generatePostHTML).join('');

    list.innerHTML = html;
}

function addPostItem(post) {
    const postItemHTML = generatePostHTML(post);

    list.insertAdjacentHTML('beforeend', postItemHTML);
}

function editList(el) {
    const id = getElementId(el);
    const name = el.dataset.name;

    inputEl.value = name;
    inputId.value = id;
}

function removeList(el) {
    const id = getElementId(el);

    PostApi
      .delete(id)
      .catch(handleError)
    el.remove();
}

function generatePostHTML(post) {
    const done = post.status ? DONE_CLASS : '';

    return postItemTemplate.innerHTML
        .replace('{{status}}', post.status)
        .replace('{{id}}', post.id)
        .replaceAll('{{name}}', post.name)
        .replace('{{done}}', done);
}

function toggleDone(el) {
    const id = getElementId(el);
    const status = el.dataset.status !== 'true';

    PostApi
        .update(id, {status})
        .catch(handleError)

    el.classList.toggle(DONE_CLASS);
}

function getElementId(el) {
    return el.dataset.id;
}

function handleError(e) {
    alert(e.message);
} 

function getInformation() {
    return {
        name: inputEl.value,
        id: inputId.value,
    };
}

function isEmpty(post) {
    return (!post || post.length === 0);
}

function clearContact() {
    inputId.value = '';
    inputEl.value = '';
}

function getPostElementId(id) {
    list.querySelector('[data-id="1"]').closest('.' + POST_ITEM);
}