/* eslint-disable no-restricted-syntax */
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
let data = {}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function setBackToDefault() {
  grocery.value = '';
  submitBtn.textContent = 'submit';
}

function updateLocalStorage() {
  window.localStorage.setItem('data', JSON.stringify(data));
}

function addItemToStorage(key, value) {
  data[key] = value;
  updateLocalStorage(data);
}

function removeItemFromStorage(key) {
  delete data[key];
  updateLocalStorage(data);
}

function clearStorage() {
  data = {};
  updateLocalStorage(data);
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const {
    dataset: { id },
  } = element;
  list.removeChild(element);
  if (list.length === 0) {
    container.classList.remove('show-continaer');
  }
  displayAlert('item removed', 'danger');
  setBackToDefault();
  removeItemFromStorage(id);
}

function addItem(id, value) {
  const element = document.createElement('article');
  element.classList.add('grocery-item');
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
          <form hidden class='edit-form'>
          <input/>
          </form>
            <div class="btn-container">
              <button class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');
  const editForm = element.querySelector('.edit-form');
  const title = element.querySelector('.title');
  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    editForm.setAttribute('hidden', true);
    title.textContent = editForm.querySelector('input').value;
    title.removeAttribute('hidden');
    addItemToStorage(id, value)
  });
  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', () => {
    title.setAttribute('hidden', true);
    editForm.removeAttribute('hidden');
    editForm.querySelector('input').value = title.textContent;
  });
  list.appendChild(element);
  container.classList.add('show-container');
  setBackToDefault();
}

function onAddItem(e) {
  e.preventDefault();
  const { value } = grocery;
  if (value !== '') {
    const id = new Date().getTime().toString();
    addItem(id, value);
    addItemToStorage(id, value)
    displayAlert('item added to the list', 'success');
  } else {
    displayAlert('please enter value', 'danger');
  }
}

function clearItems() {
  const items = document.querySelectorAll('.grocery-item');
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('empty list', 'danger');
  setBackToDefault();
  clearStorage();
}

clearBtn.addEventListener('click', clearItems);

document.addEventListener('DOMContentLoaded', () => {
  data = JSON.parse(window.localStorage.getItem('data'));
  for (const [key, value] of Object.entries(data)) {
    addItem(key, value);
  }
});
form.addEventListener('submit', onAddItem);
