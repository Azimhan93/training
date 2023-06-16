const div = document.querySelector('#container');
const p = document.createElement('p');
const newLi = '<li>Second</li>';

const ol = document.createElement('ol');
const li = document.createElement('li');
li.textContent = 'First';

li.className = 'list';
p.className = 'paragraph';
p.innerText = 'В JavaScript имеется набор методов insertAdjacent, которые позволяют вставить один или несколько узлов в указанную позицию position относительно $elem.';

ol.append(li);

ol.insertAdjacentHTML('beforeend', newLi);
div.append(p);
div.prepend(ol);

