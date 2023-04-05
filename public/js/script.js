
const btn = document.querySelector('#submit');
const title = document.querySelector('.title');
const content = document.querySelector('.content');
const lists = document.querySelector('.lists');

const renderData = () => {

  fetch('/notes').then(result => result.json()).then(data => {
    lists.innerHTML = ''
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

btn.addEventListener('click', () => {
  if(title.value ==='', content.value === ''){
    return
  }
  let data = {
    test: "hello",
    title: title.value,
    content: content.value
  }

  console.log(JSON.stringify(data));
  fetch('/create', {
    method: 'POST',
 headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
    body: JSON.stringify(data)

  })
  .catch(console.log)
  .then(result => result.json())
  .then(data => renderData(data))
  .catch(console.log)
})