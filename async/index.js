/* async function loadJson(url) {
    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
}
      
loadJson('no-such-user.json') // (3)
.catch(alert); // Error: 404    */ 

const btn = document.querySelector('button');
const input = document.querySelector('.input');


btn.addEventListener('click', onBtnClick);

function onBtnClick() {
    alert('You clicked me!');

    let pElem = document.createElement('p');
    pElem.textContent = 'This is a newly-added paragraph.';
    document.body.append(pElem);

    toggleDone();
}

function toggleDone(el) {
    if(input.style.display === 'none') {
        return input.style.display = 'block';
    } else {
        return input.style.display = 'none';
    }
} 

