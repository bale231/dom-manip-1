const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');

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
  
  //Create a label for checkbox:
  const label = document.createElement('label');
  label.textContent = productText;

  //Create a button to delete to-do:
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.classList.add('delete');

  //Add checkbox, label and button on li:
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  //Add to-do on ul:
  ul.appendChild(listItem);


  //Add event onclick to delete-button
  deleteButton.addEventListener('click', function () {
    listItem.remove(listItem);
  });
};
