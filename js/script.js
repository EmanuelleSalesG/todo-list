//when loading the page, load from localStorage
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

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
        
        //Whenever we update the todo list, save in localStorage
        saveToStorage();
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
        saveToStorage();
        " class="delete-todo-button">Delete</button>`;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function saveToStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}