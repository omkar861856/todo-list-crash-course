const form = document.getElementById('todoForm');
const todoList = document.getElementById('todoList')

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(form); // inbuilt method to create a new form data object.
    const todo = formData.get('todo')
    addTodo(todo)
    form.reset()
})

// dom manipulation logic


function addTodo(t){  

    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'singleTodo');
    mainDiv.setAttribute('id', `${t}_main`)


    const h4 = document.createElement('h4');
    h4.innerText = t;
    h4.setAttribute('id', t)

    const buttonsDiv = document.createElement('div');
    const editButton = document.createElement('button');
    editButton.innerText = "Edit"
    editButton.addEventListener('click',()=>{
        editTodo(t)
    })
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', ()=>{
        deleteTodo(t)
    })
    buttonsDiv.appendChild(editButton)
    buttonsDiv.appendChild(deleteButton)

    mainDiv.appendChild(h4);
    mainDiv.appendChild(buttonsDiv);

    todoList.appendChild(mainDiv)
    

}

// window object.

function editTodo(t){

    const edited = prompt(`Edit ${t}`)
    const todo = document.getElementById(t);
    todo.innerText = edited

}

// removeChild method.

function deleteTodo(t){

    const deleteTodo = document.getElementById(`${t}_main`)

    // todoList.removechild(element)

    todoList.removeChild(deleteTodo)

}

