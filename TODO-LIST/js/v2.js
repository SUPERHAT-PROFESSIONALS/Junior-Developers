const todoList = ['1. SAMPLES TODOS ORIGINATING FROM THE ARRAY IN THE CODE FILE :','2. PLAY','3. EAT','4. SLEEP','5. ADD YOURS'];

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const name = todoList[i];
        const html = `<p>${name}</p>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    //console.log("Input value:", inputElement.value); // Log input value for debugging
    const name = inputElement.value;
    todoList.push(name);
    inputElement.value = '';
    renderTodoList();
}