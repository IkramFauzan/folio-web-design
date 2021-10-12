const inputItem = document.getElementById('inputList');
const btnAdd = document.getElementById('btn-add-item');
const list = document.getElementById('list');

const clickListener = (e) => {
  const li = list.getElementsByTagName('li');
  for (let i = 0; i < li.length; i++) {
    text = li[i].innerText;
    lastSpace = text.lastIndexOf(' ');
    value = text.substring(0, lastSpace);
    if (value === inputItem.value) {
      alert('Item already added!');
      inputItem.value = document.getElementById('none').value;
      return;
    }
  }
  if (inputItem.value === '') {
    alert('Item cant empty!');
  } else {
    const item = document.createElement('li');
    const button = document.createElement('button');
    item.textContent = inputItem.value;
    item.classList.add('listSet');
    button.textContent = 'X';
    button.classList.add('btn', 'btn-primary');

    const buttonClickListener = (e) => {
      list.removeChild(item);
    };
    list.appendChild(item);
    item.append(' ', button);

    button.addEventListener('click', buttonClickListener);
  }
  inputItem.value = '';
};

btnAdd.addEventListener('click', clickListener);
