const btn = document.querySelector('#submit');
const title = document.querySelector('.title');
const content = document.querySelector('.content');
const lists = document.querySelector('.lists');

btn.addEventListener('click', () => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const h2 = document.createElement('h2');
  const h4 = document.createElement('h4');
  const items = [{ title: title.value, description: content.value }];

  for (let i = 0; i < items.length; i++) {

    h2.textContent = items[i].title;
    h4.textContent = items[i].description;
    p.appendChild(h2);
    p.appendChild(h4);
    li.appendChild(p);
  }
  lists.appendChild(li);

});