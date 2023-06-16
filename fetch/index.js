import Post from "./postApi.js";

const btn = document.querySelector('#btn');
const ul = document.querySelector('#list');
const createBtn = document.querySelector('#createBtn');
const title = document.querySelector('#title');



btn.addEventListener('click', onGetPostsBtnClick);
createBtn.addEventListener('click', onPostPostsBtnClick);


function onGetPostsBtnClick() {
    Post.getList()
        .then((posts) =>  {
            posts.forEach(post => renderPost(post));
        });
}

function onPostPostsBtnClick() {

    const newPost = {
        "userId": 1,
        "title": title.value,
        "body": "New Post",
                    
    }

    Post
        .postList(newPost)
        .then((post) => {
            renderPost(post);
        })

}



function renderPost(post) {
    const postHTML = `<li>${post.title}</li>`;

    ul.insertAdjacentHTML("afterend", postHTML);
}