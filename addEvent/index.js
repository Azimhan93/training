let container = document.querySelector('.container');
let article = document.querySelector('.article');
let remoteBtn = document.querySelector('.remote');


container.addEventListener('click', onBtnClick);

function onBtnClick() {
    if(article.className != 'article-hidden') return;
}

