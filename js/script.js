const todoList = [];

function addTodo() {

    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

        todoList.push({
            name, 
            dueDate});
            

        inputElement.value = '';

        renderTodoList();
}

function renderTodoList() {
let todoListHTML = '';
            

    for (i = 0; i < todoList.length; i++) {
            
        const todoObject = todoList[i];
        const {name} = todoObject;
        const {dueDate} = todoObject;

        todoListHTML += `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button>`;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    
}