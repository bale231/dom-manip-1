const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const div = document.querySelector('.checkbox-con');

//Arrow function to create ad delete to-do:
const addProduct = () => {
  //Var to takes a value input to user:
  const productText = input.value;
  if (productText === '') {
    return;
  }

  //Clean input:
  input.value = '';

  //Create a new to-do:
  const listItem = document.createElement('li');

  //Create a checkbox:
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', 'checkbox')

  //Create a label for checkbox:
  const label = document.createElement('label');
  label.textContent = productText;

  //Create a button to delete to-do:
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = `<svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>`;
  deleteButton.classList.add('button');

  //Add checkbox, label and button on li:
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  //Add to-do on ul:
  div.appendChild(listItem);


  //Add event onclick to delete-button
  deleteButton.addEventListener('click', function () {
    listItem.remove(listItem);
  });
};
