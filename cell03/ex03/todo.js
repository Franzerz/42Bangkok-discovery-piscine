document.addEventListener('DOMContentLoaded', function() {
	load();
  });
  
  function openNew() {
	const todoText = prompt('Enter new TODO:');
	if (todoText !== null && todoText.trim() !== '') {
	  addTodo(todoText);
	}
  }
  
  function addTodo(text) {
	const ftList = document.getElementById('ft_list');
	const todoDiv = document.createElement('div');
	todoDiv.className = 'todo-item';
	todoDiv.innerText = text;
	todoDiv.addEventListener('click', function() {
	  removeTodo(this);
	});
	ftList.insertBefore(todoDiv, ftList.firstChild);
	save();
  }
  
  function removeTodo(todoDiv) {
	const confirmRemove = confirm('Do you want to remove this TODO?');
	if (confirmRemove) {
	  todoDiv.remove();
	  save();
	}
  }
  
  function save() {
	const ftList = document.getElementById('ft_list');
	const todoItems = ftList.getElementsByClassName('todo-item');
	const todoList = Array.from(todoItems).map(item => item.innerText);
	localStorage.setItem('todoList', JSON.stringify(todoList));
  }
  
  function load() {
	const ftList = document.getElementById('ft_list');
	const storedList = localStorage.getItem('todoList');
	if (storedList) {
	  const todoList = JSON.parse(storedList);
	  todoList.forEach(text => addTodo(text));
	}
  }