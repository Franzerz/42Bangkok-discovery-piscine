let ctodo = [];
const item = 'todo';
const saveTodo = () => Cookies.set(item, JSON.stringify(ctodo));
const getTodo = () => Cookies.get(item) ? JSON.parse(Cookies.get(item)) : undefined;

$('document').ready(() => {
	const savedTodo = getTodo();
	if (savedTodo && savedTodo.length > 0) {
		ctodo = savedTodo;
		showList();
	}
})

function createList(id, value) {
	return $('<li>', {
		id,
		class: 'list-item',
		text: value,
		click: removeTodo,
	});
}

function showList() {
	const id = '#ft_list';
	$(id).empty();
	ctodo.forEach((el, i) => createList(`todo${i}`, el).appendTo(id));
}

function newTodo() {
	var todo = prompt("Enter a new todo item:");
    if (todo) {
        ctodo.unshift(todo);
	saveTodo();
	showList();
	}
}

function removeTodo(event) {
	const value = event.target.textContent;
	const confirm = window.confirm(`Do you want to remove this TODO?`);
	if (confirm) {
		const index = ctodo.findIndex(el => el === value);
		ctodo.splice(index, 1);
		saveTodo();
		showList();
	}
}