const button = document.querySelector('#subbutton')
const input = document.querySelector('#subbox')
const list = document.querySelector('#todo-list')
const reset = document.querySelector('#reset')
button.addEventListener('click', function(){
  const newToDo = document.createElement('li')
  newToDo.textContent = input.value
  if(input.value !== "") {
    document.querySelector('ul').appendChild(newToDo)
  }
  input.value = ""
})

reset.addEventListener('click', function(){
  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
  input.value = ""
})
