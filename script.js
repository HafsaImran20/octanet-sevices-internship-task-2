const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', addTask);

function addTask() {
	const task = taskInput.value.trim();
	if (task) {
		const taskListItem = document.createElement('li');
		taskListItem.textContent = task;
		taskList.appendChild(taskListItem);
		taskInput.value = '';
	}
}

taskList.addEventListener('click', deleteTask);

function deleteTask(event) {
	if (event.target.tagName === 'LI') {
		event.target.remove();
	}
}