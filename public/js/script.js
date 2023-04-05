const btn = document.querySelector('#submit');
const title = document.querySelector('.title');
const content = document.querySelector('.content');
const lists = document.querySelector('.lists');

const renderData = () => {
  fetch('/notes').then(result => result.json()).then(data => {
    console.log(data.data);
    data.data.forEach(ele => {
      const li = document.createElement('li');
      const p = document.createElement('p');
      const h2 = document.createElement('h2');
      const h4 = document.createElement('h4');

        h2.textContent = ele.title;
        h4.textContent = ele.content;
        p.appendChild(h2);
        p.appendChild(h4);
        li.appendChild(p);
      
      lists.appendChild(li);

    });
  }).catch(console.log);

}
renderData()
